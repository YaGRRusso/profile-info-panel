'use client'

import { Button, Form, Input, Textarea } from '@/components'
import { CommonFormValuesProps } from '@/types/common-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormHTMLAttributes, forwardRef, useCallback } from 'react'
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
    const {
      watch,
      setValue,
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
        <Button type="submit" className="mt-2" disabled={isLoading}>
          Concluir
        </Button>
      </Form.Root>
    )
  },
)
CoursesCommonForm.displayName = 'CoursesCommonForm'

export default CoursesCommonForm
