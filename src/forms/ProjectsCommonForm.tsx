'use client'

import { Button, Form, Input, Select, Textarea } from '@/components'
import { useSkills } from '@/sdk'
import { CommonFormValuesProps } from '@/types/common-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { X } from '@phosphor-icons/react'
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

const formSchema = z.object({
  name: z.string().min(1, 'required'),
  description: z.string().min(1, 'required'),
  image: z.string().min(1, 'required'),
  link: z.string().min(1, 'required'),
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
    const [searchSkills, setSearchSkills] = useState('')
    const skills = useSkills()

    const skillsControllerFindAll = useQuery({
      queryKey: ['skills'],
      queryFn: () => skills.skillsControllerFindAll(),
    })

    const {
      watch,
      setValue,
      getValues,
      handleSubmit,
      formState: { errors },
    } = useForm<FormSchemaProps>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: '',
        description: '',
        image: '',
        link: '',
        skills: [],
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
            value={watch('name')}
            placeholder="Name"
          />
          <Form.Message>{errors.name?.message}</Form.Message>
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
          <Form.Label>Image</Form.Label>
          <Input
            onChange={(ev) => setValue('image', ev.target.value)}
            value={watch('image')}
            placeholder="Image"
          />
          <Form.Message>{errors.image?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Link</Form.Label>
          <Input
            onChange={(ev) => setValue('link', ev.target.value)}
            value={watch('link') ?? '  '}
            placeholder="Link"
          />
          <Form.Message>{errors.link?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Skills</Form.Label>
          <Select.Root
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
                <Select.Item key={id} value={id}>
                  {name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <Form.Message>{errors.skills?.message}</Form.Message>
          {watch('skills') && (
            <ul>
              {watch('skills').map((skill) => (
                <li
                  key={skill}
                  className="flex items-center justify-between gap-2 border-b border-gray-200 py-2 last:border-none dark:border-gray-800"
                >
                  <span>{skill}</span>
                  <button
                    onClick={() =>
                      setValue(
                        'skills',
                        getValues('skills').filter(
                          (oldSkill) => oldSkill !== skill,
                        ),
                      )
                    }
                  >
                    <X />
                  </button>
                </li>
              ))}
            </ul>
          )}
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
