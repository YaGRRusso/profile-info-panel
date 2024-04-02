'use client'

import { Button, Form, Input } from '@/components'
import { CommonFormValuesProps } from '@/types/common-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormHTMLAttributes, forwardRef, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, 'required'),
  category: z.string().min(1, 'required'),
})

type FormSchemaProps = z.infer<typeof formSchema>

export interface SkillsCommonFormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    CommonFormValuesProps<FormSchemaProps> {
  isLoading?: boolean
}

const SkillsCommonForm = forwardRef<HTMLFormElement, SkillsCommonFormProps>(
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
        category: '',
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
            placeholder="Javascript"
          />
          <Form.Message>{errors.name?.message}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Input
            onChange={(ev) => setValue('category', ev.target.value)}
            value={watch('category')}
            placeholder="Language"
          />
          <Form.Message>{errors.category?.message}</Form.Message>
        </Form.Group>
        <Button type="submit" className="mt-2" disabled={isLoading}>
          Concluir
        </Button>
      </Form.Root>
    )
  },
)
SkillsCommonForm.displayName = 'SkillsCommonForm'

export default SkillsCommonForm
