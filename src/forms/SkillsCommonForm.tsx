'use client'

import { Button, Form, Input, Select } from '@/components'
import { CreateSkillDtoCategoryEnum } from '@/sdk'
import { CommonFormValuesProps } from '@/types/common-form'
import { CommonSelectValueProps } from '@/types/common-select'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormHTMLAttributes, forwardRef, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const categoryOptions: CommonSelectValueProps<CreateSkillDtoCategoryEnum>[] = [
  { value: 'LANGUAGE', label: 'Language' },
  { value: 'LIBRARY', label: 'Library' },
  { value: 'OTHER', label: 'Other' },
  { value: 'SYSTEM', label: 'System' },
  { value: 'TOOL', label: 'Tool' },
]

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
          <Select.Root
            onValueChange={(ev) => setValue('category', ev)}
            value={watch('category')}
          >
            <Select.Trigger>
              <Select.Value placeholder="Select" />
            </Select.Trigger>
            <Select.Content>
              {categoryOptions.map(({ value, label }) => (
                <Select.Item key={value} value={value}>
                  {label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
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
