'use client'

import { Button, Form, Input, Select, Textarea, TagList, Datepicker, Skeleton } from '@/components'
import { useSkillsFindAll } from '@/hooks'
import { CreateFormationDtoStatusEnum } from '@/sdk'
import { CommonFormValuesProps } from '@/types/common-form'
import { CommonSelectValueProps } from '@/types/common-select'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { FormHTMLAttributes, forwardRef, useCallback, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const statusOptions: CommonSelectValueProps<CreateFormationDtoStatusEnum>[] = [
  { value: 'COMPLETE', label: 'Completo' },
  { value: 'INCOMPLETE', label: 'Incompleto' },
  { value: 'PAUSED', label: 'Pausado' },
  { value: 'PROGRESS', label: 'Em andamento' },
]

const formSchema = z.object({
  name: z.string().min(1),
  school: z.string().min(1),
  description: z.string().min(1),
  status: z.string().min(1),
  certificate: z.string().optional(),
  start: z.date(),
  end: z.date().optional(),
  skills: z.array(z.string()),
})

type FormSchemaProps = z.infer<typeof formSchema>

export interface FormationsCommonFormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    CommonFormValuesProps<FormSchemaProps> {
  isLoading?: boolean
}

const FormationsCommonForm = forwardRef<HTMLFormElement, FormationsCommonFormProps>(
  ({ handleSubmit: onSubmit, isLoading, defaultValues, customValues, ...rest }, ref) => {
    const tForm = useTranslations('form')
    const [searchSkills, setSearchSkills] = useState('')
    const skillsControllerFindAll = useSkillsFindAll()

    const {
      watch,
      setValue,
      handleSubmit,
      getValues,
      formState: { errors },
    } = useForm<FormSchemaProps>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        ...defaultValues,
      },
    })

    const onSub = useCallback(
      (data: FormSchemaProps) => {
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
            value={watch('name') ?? ''}
            placeholder="Name"
          />
          <Form.Message>{errors.name && tForm(errors.name?.message)}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>School</Form.Label>
          <Input
            onChange={(ev) => setValue('school', ev.target.value)}
            value={watch('school') ?? ''}
            placeholder="School"
          />
          <Form.Message>{errors.school && tForm(errors.school?.message)}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Textarea
            onChange={(ev) => setValue('description', ev.target.value)}
            value={watch('description') ?? ''}
            placeholder="Description"
          />
          <Form.Message>{errors.description && tForm(errors.description?.message)}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Select.Root onValueChange={(ev) => setValue('status', ev)} value={watch('status') ?? ''}>
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
          <Form.Message>{errors.status && tForm(errors.status?.message)}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Certificate</Form.Label>
          <Input
            onChange={(ev) => setValue('certificate', ev.target.value)}
            value={watch('certificate') ?? ''}
            placeholder="Certificate"
          />
          <Form.Message>{errors.certificate && tForm(errors.certificate?.message)}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Start</Form.Label>
          <Datepicker
            onSelect={(ev) => ev && setValue('start', ev)}
            selected={watch('start')}
            placeholder="00/00/0000"
          />
          <Form.Message>{errors.start && tForm(errors.start?.message)}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>End</Form.Label>
          <Datepicker
            onSelect={(ev) => setValue('end', ev)}
            selected={watch('end')}
            placeholder="00/00/0000"
          />
          <Form.Message>{errors.end && tForm(errors.end?.message)}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Skills</Form.Label>
          {skillsControllerFindAll.isLoading ? (
            <Skeleton className="h-20 w-full" />
          ) : (
            <TagList
              tags={watch('skills')?.map((skill) => ({
                value: skill,
                label: skillsControllerFindAll.data?.data.find(({ id }) => id === skill)?.name,
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
                onValueChange={(ev) => setValue('skills', [...(getValues('skills') ?? []), ev])}
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
                    <Select.Item key={id} value={id} disabled={watch('skills')?.includes(id)}>
                      {name}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </TagList>
          )}
          <Form.Message>{errors.skills && tForm(errors.skills?.message)}</Form.Message>
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
