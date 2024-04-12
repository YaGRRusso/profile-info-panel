'use client'

import { Button, Form, Input, Select, Textarea } from '@/components'
import { CreateCourseDtoStatusEnum } from '@/sdk'
import { CommonFormValuesProps } from '@/types/common-form'
import { CommonSelectValueProps } from '@/types/common-select'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormHTMLAttributes, forwardRef, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const statusOptions: CommonSelectValueProps<CreateCourseDtoStatusEnum>[] = [
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
  hours: z.number().min(1, 'required'),
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
        certificate: '',
        description: '',
        hours: undefined,
        school: '',
        skills: [],
        status: '',
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
          <Form.Label>Hours</Form.Label>
          <Input
            onChange={(ev) => setValue('hours', Number(ev.target.value))}
            value={watch('hours') ?? '  '}
            placeholder="Hours"
            min={1}
            type="number"
          />
          <Form.Message>{errors.hours?.message}</Form.Message>
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
