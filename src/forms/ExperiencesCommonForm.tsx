'use client'

import { Button, Form, Input, Textarea } from '@/components'
import { CommonFormValuesProps } from '@/types/common-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormHTMLAttributes, forwardRef, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  role: z.string().min(1, 'required'),
  organization: z.string().min(1, 'required'),
  description: z.string().min(1, 'required'),
  start: z.string().min(1, 'required'),
  end: z.string().optional(),
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
    const {
      watch,
      setValue,
      handleSubmit,
      formState: { errors },
    } = useForm<FormSchemaProps>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        role: '',
        organization: '',
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

    return (
      <Form.Root ref={ref} onSubmit={handleSubmit(onSub)} {...rest}>
        <Form.Group>
          <Form.Label>Role</Form.Label>
          <Input
            onChange={(ev) => setValue('role', ev.target.value)}
            value={watch('role')}
            placeholder="Role"
          />
          <Form.Message>{errors.role?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Organization</Form.Label>
          <Input
            onChange={(ev) => setValue('organization', ev.target.value)}
            value={watch('organization')}
            placeholder="Organization"
          />
          <Form.Message>{errors.organization?.message}</Form.Message>
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
        <Button type="submit" className="mt-2" disabled={isLoading}>
          Concluir
        </Button>
      </Form.Root>
    )
  },
)
ExperiencesCommonForm.displayName = 'ExperiencesCommonForm'

export default ExperiencesCommonForm
