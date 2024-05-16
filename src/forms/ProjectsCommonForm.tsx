'use client'

import { Button, Form, Input, Select, TagList, Textarea } from '@/components'
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
  name: z.string().min(1),
  description: z.string().min(1),
  image: z.string().min(1),
  link: z.string().min(1),
  skills: z.array(z.string()),
})

type FormSchemaProps = z.infer<typeof formSchema>

export interface CoursesCommonFormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    CommonFormValuesProps<FormSchemaProps> {
  isLoading?: boolean
}

const CoursesCommonForm = forwardRef<HTMLFormElement, CoursesCommonFormProps>(
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
      getValues,
      handleSubmit,
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
          <Form.Message>
            {errors.name && tForm(errors.name?.message)}
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
          <Form.Label>Image</Form.Label>
          <Input
            onChange={(ev) => setValue('image', ev.target.value)}
            value={watch('image') ?? ''}
            placeholder="Image"
          />
          <Form.Message>
            {errors.image && tForm(errors.image?.message)}
          </Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Link</Form.Label>
          <Input
            onChange={(ev) => setValue('link', ev.target.value)}
            value={watch('link') ?? ''}
            placeholder="Link"
          />
          <Form.Message>
            {errors.link && tForm(errors.link?.message)}
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
CoursesCommonForm.displayName = 'CoursesCommonForm'

export default CoursesCommonForm
