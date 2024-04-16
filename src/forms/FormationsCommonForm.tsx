'use client'

import { Button, Form, Input, Select, Textarea, TagList } from '@/components'
import { CreateFormationDtoStatusEnum, useSkills } from '@/sdk'
import { CommonFormValuesProps } from '@/types/common-form'
import { CommonSelectValueProps } from '@/types/common-select'

import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import {
  FormHTMLAttributes,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const statusOptions: CommonSelectValueProps<CreateFormationDtoStatusEnum>[] = [
  { value: 'COMPLETE', label: 'Completo' },
  { value: 'INCOMPLETE', label: 'Incompleto' },
  { value: 'PAUSED', label: 'Pausado' },
  { value: 'PROGRESS', label: 'Em andamento' },
]

const formSchema = z.object({
  name: z.string().min(1, 'required'),
  school: z.string().min(1, 'required'),
  description: z.string().min(1, 'required'),
  status: z.string().min(1, 'required'),
  certificate: z.string().optional(),
  start: z.string().min(1, 'required'),
  end: z.string().optional(),
  skills: z.array(z.string()),
})

type FormSchemaProps = z.infer<typeof formSchema>

export interface FormationsCommonFormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    CommonFormValuesProps<FormSchemaProps> {
  isLoading?: boolean
}

const FormationsCommonForm = forwardRef<
  HTMLFormElement,
  FormationsCommonFormProps
>(
  (
    { handleSubmit: onSubmit, isLoading, defaultValues, customValues, ...rest },
    ref,
  ) => {
    const [searchSkills, setSearchSkills] = useState('')
    const skills = useSkills()

    const skillsControllerFindAll = useQuery({
      queryKey: ['skills'],
      queryFn: () => skills.skillsControllerFindAll(),
    })

    const {
      watch,
      setValue,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm<FormSchemaProps>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: '',
        certificate: '',
        school: '',
        status: '',
        description: '',
        start: '',
        end: '',
        skills: [],
        ...defaultValues,
      },
    })

    const onSub = useCallback(
      (data: FormSchemaProps) => {
        data.start = new Date(data.start).toISOString()
        data.end
          ? (data.end = new Date(data.end).toISOString())
          : (data.end = undefined)
        onSubmit({ ...data, ...customValues })
      },
      [customValues, onSubmit],
    )

    const filteredSkills = useMemo(() => {
      const lower = searchSkills.toLowerCase()
      return skillsControllerFindAll.data?.data.filter(({ name }) =>
        name.toLowerCase().includes(lower),
      )
    }, [searchSkills, skillsControllerFindAll.data?.data])

    return (
      <Form.Root ref={ref} onSubmit={handleSubmit(onSub)} {...rest}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Input
            onChange={(ev) => setValue('name', ev.target.value)}
            value={watch('name')}
            placeholder="Name"
          />
          <Form.Message>{errors.name?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>School</Form.Label>
          <Input
            onChange={(ev) => setValue('school', ev.target.value)}
            value={watch('school')}
            placeholder="School"
          />
          <Form.Message>{errors.school?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Textarea
            onChange={(ev) => setValue('description', ev.target.value)}
            value={watch('description')}
            placeholder="Description"
          />
          <Form.Message>{errors.description?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Select.Root
            onValueChange={(ev) => setValue('status', ev)}
            value={watch('status')}
          >
            <Select.Trigger>
              <Select.Value placeholder="Select" />
            </Select.Trigger>
            <Select.Content>
              {statusOptions.map(({ value, label }) => (
                <Select.Item key={value} value={value}>
                  {label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <Form.Message>{errors.status?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Certificate</Form.Label>
          <Input
            onChange={(ev) => setValue('certificate', ev.target.value)}
            value={watch('certificate')}
            placeholder="Certificate"
          />
          <Form.Message>{errors.certificate?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Start</Form.Label>
          <Input
            onChange={(ev) => setValue('start', ev.target.value)}
            value={watch('start')}
            type="date"
          />
          <Form.Message>{errors.start?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>End</Form.Label>
          <Input
            onChange={(ev) => setValue('end', ev.target.value)}
            value={watch('end')}
            type="date"
          />
          <Form.Message>{errors.end?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Skills</Form.Label>
          <TagList
            tags={watch('skills').map((skill) => ({
              value: skill,
              label: skillsControllerFindAll.data?.data.find(
                ({ id }) => id === skill,
              )?.name,
            }))}
            placeholder="Empty"
            onRemove={(tag) =>
              setValue(
                'skills',
                getValues('skills').filter((skill) => skill !== tag),
              )
            }
          >
            <Select.Root
              value=""
              disabled={skillsControllerFindAll.isLoading}
              onValueChange={(ev) =>
                setValue('skills', [...getValues('skills'), ev])
              }
            >
              <Select.Trigger>
                <Select.Value placeholder="Select" />
              </Select.Trigger>
              <Select.Content>
                <Select.Search
                  placeholder="Search"
                  value={searchSkills}
                  onChange={(ev) => setSearchSkills(ev.target.value)}
                />
                {filteredSkills?.map(({ id, name }) => (
                  <Select.Item
                    key={id}
                    value={id}
                    disabled={watch('skills').includes(id)}
                  >
                    {name}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </TagList>
          <Form.Message>{errors.skills?.message}</Form.Message>
        </Form.Group>
        <Button type="submit" className="mt-2" disabled={isLoading}>
          Concluir
        </Button>
      </Form.Root>
    )
  },
)
FormationsCommonForm.displayName = 'FormationsCommonForm'

export default FormationsCommonForm
