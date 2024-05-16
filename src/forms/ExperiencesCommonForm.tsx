'use client'

import {
  Button,
  Form,
  Input,
  Textarea,
  Select,
  TagList,
  Datepicker,
} from '@/components'
import { useSkillsFindAll } from '@/hooks'
import { CommonFormValuesProps } from '@/types/common-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import {
  FormHTMLAttributes,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  role: z.string().min(1),
  organization: z.string().min(1),
  description: z.string().min(1),
  start: z.date(),
  end: z.date().optional(),
  skills: z.array(z.string()),
})

type FormSchemaProps = z.infer<typeof formSchema>

export interface ExperiencesCommonFormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    CommonFormValuesProps<FormSchemaProps> {
  isLoading?: boolean
}

const ExperiencesCommonForm = forwardRef<
  HTMLFormElement,
  ExperiencesCommonFormProps
>(
  (
    { handleSubmit: onSubmit, isLoading, defaultValues, customValues, ...rest },
    ref,
  ) => {
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
          <Form.Label>Role</Form.Label>
          <Input
            onChange={(ev) => setValue('role', ev.target.value)}
            value={watch('role') ?? ''}
            placeholder="Role"
          />
          <Form.Message>
            {errors.role && tForm(errors.role?.message)}
          </Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Organization</Form.Label>
          <Input
            onChange={(ev) => setValue('organization', ev.target.value)}
            value={watch('organization') ?? ''}
            placeholder="Organization"
          />
          <Form.Message>
            {errors.organization && tForm(errors.organization?.message)}
          </Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Textarea
            onChange={(ev) => setValue('description', ev.target.value)}
            value={watch('description') ?? ''}
            placeholder="Description"
          />
          <Form.Message>
            {errors.description && tForm(errors.description?.message)}
          </Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Start</Form.Label>
          <Datepicker
            onSelect={(ev) => ev && setValue('start', ev)}
            selected={watch('start')}
            placeholder="00/00/0000"
          />
          <Form.Message>
            {errors.start && tForm(errors.start?.message)}
          </Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>End</Form.Label>
          <Datepicker
            onSelect={(ev) => setValue('end', ev)}
            selected={watch('end')}
            placeholder="00/00/0000"
          />
          <Form.Message>
            {errors.end && tForm(errors.end?.message)}
          </Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Skills</Form.Label>
          <TagList
            tags={watch('skills')?.map((skill) => ({
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
                setValue('skills', [...(getValues('skills') ?? []), ev])
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
                    disabled={watch('skills')?.includes(id)}
                  >
                    {name}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </TagList>
          <Form.Message>
            {errors.skills && tForm(errors.skills?.message)}
          </Form.Message>
        </Form.Group>
        <Button type="submit" className="mt-2" disabled={isLoading}>
          Concluir
        </Button>
      </Form.Root>
    )
  },
)
ExperiencesCommonForm.displayName = 'ExperiencesCommonForm'

export default ExperiencesCommonForm
