'use client'

import { Button, Form, Input, Select } from '@/components'
import { CreateSkillDtoCategoryEnum } from '@/sdk'
import { CommonFormValuesProps } from '@/types/common-form'
import { CommonSelectValueProps } from '@/types/common-select'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { FormHTMLAttributes, forwardRef, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const categoryOptions: CommonSelectValueProps<CreateSkillDtoCategoryEnum>[] = [
  { value: 'DATABASE', label: 'Database' },
  { value: 'DEVOPS', label: 'DevOPS' },
  { value: 'FRAMEWORK', label: 'Framework' },
  { value: 'LANGUAGE', label: 'Language' },
  { value: 'LIBRARY', label: 'Library' },
  { value: 'PATTERN', label: 'Pattern' },
  { value: 'SYSTEM', label: 'System' },
  { value: 'TESTING', label: 'Testing' },
  { value: 'TOOL', label: 'Tool' },
  { value: 'SOFT', label: 'Soft' },
  { value: 'OTHER', label: 'Other' },
]

const formSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
})

type FormSchemaProps = z.infer<typeof formSchema>

export interface SkillsCommonFormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    CommonFormValuesProps<FormSchemaProps> {
  isLoading?: boolean
}

const SkillsCommonForm = forwardRef<HTMLFormElement, SkillsCommonFormProps>(
  ({ handleSubmit: onSubmit, isLoading, defaultValues, customValues, ...rest }, ref) => {
    const tForm = useTranslations('form')

    const {
      watch,
      setValue,
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

    return (
      <Form.Root ref={ref} onSubmit={handleSubmit(onSub)} {...rest}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Input
            onChange={(ev) => setValue('name', ev.target.value)}
            value={watch('name') ?? ''}
            placeholder="Javascript"
          />
          <Form.Message>{errors.name && tForm(errors.name?.message)}</Form.Message>
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Select.Root
            onValueChange={(ev) => setValue('category', ev)}
            value={watch('category') ?? ''}
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
          <Form.Message>{errors.category && tForm(errors.category?.message)}</Form.Message>
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
