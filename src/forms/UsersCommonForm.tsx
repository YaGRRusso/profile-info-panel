'use client'

import {
  Button,
  Form,
  Input,
  Checkbox,
  Textarea,
  Datepicker,
} from '@/components'
import { mask } from '@/helpers/mask'
import { CommonFormValuesProps } from '@/types/common-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { UserPlus } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { FormHTMLAttributes, forwardRef, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, 'required'),
  birth: z.date(),
  description: z.string().min(1, 'required'),
  email: z.string().min(1, 'required').email('invalid'),
  password: z.string().min(1, 'required'),
  nickname: z.string().min(1, 'required'),
  phone: z.string().min(1, 'required'),
  picture: z.string(),
  postal: z.string().min(1, 'required'),
  address: z.string().min(1, 'required'),
  title: z.string().min(1, 'required'),
  passwordConfirm: z.string().min(1, 'required').optional(),
})

type FormSchemaProps = z.infer<typeof formSchema>

const createFormSchema = formSchema.refine(
  (data) => data.password === data.passwordConfirm,
  {
    message: 'sameValue',
    path: ['passwordConfirm'],
  },
)

const editFormSchema = formSchema.omit({
  password: true,
  passwordConfirm: true,
  email: true,
})

export interface UsersCommonFormProps
  extends FormHTMLAttributes<HTMLFormElement>,
    CommonFormValuesProps<FormSchemaProps> {
  isLoading?: boolean
}

const UsersCommonForm = forwardRef<HTMLFormElement, UsersCommonFormProps>(
  (
    {
      handleSubmit: onSubmit,
      isLoading,
      defaultValues,
      customValues,
      isEditing,
      ...rest
    },
    ref,
  ) => {
    const [isShowingPassword, setIsShowingPassword] = useState(false)
    const tForm = useTranslations('form')

    const {
      watch,
      setValue,
      handleSubmit,
      formState: { errors },
    } = useForm<FormSchemaProps>({
      resolver: zodResolver(isEditing ? editFormSchema : createFormSchema),
      defaultValues: {
        address: '',
        description: '',
        email: '',
        name: '',
        nickname: '',
        password: '',
        passwordConfirm: '',
        phone: '',
        picture: 'https://picsum.photos/60',
        postal: '',
        title: '',
        ...defaultValues,
        birth: defaultValues?.birth && new Date(defaultValues.birth),
      },
    })

    const onSub = useCallback(
      (data: FormSchemaProps) => {
        delete data.passwordConfirm
        onSubmit({ ...data, ...customValues })
      },
      [customValues, onSubmit],
    )

    return (
      <Form.Root ref={ref} onSubmit={handleSubmit(onSub)} {...rest}>
        {/* <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] gap-x-6 gap-y-4"> */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-md:grid-cols-1">
          <Form.Group className="col-span-full">
            <Form.Label>Name</Form.Label>
            <Input
              onChange={(ev) => setValue('name', ev.target.value)}
              value={watch('name')}
              placeholder="John Doe"
            />
            <Form.Message>{errors.name?.message}</Form.Message>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nickname</Form.Label>
            <Input
              onChange={(ev) => setValue('nickname', ev.target.value)}
              value={watch('nickname')}
              placeholder="JohnDoe123"
            />
            <Form.Message>{errors.nickname?.message}</Form.Message>
          </Form.Group>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Input
              onChange={(ev) => setValue('title', ev.target.value)}
              value={watch('title')}
              placeholder="Full Stack Developer"
            />
            <Form.Message>{errors.title?.message}</Form.Message>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Input
              placeholder="(00) 00000-0000"
              value={mask('(00) 00000-0000', watch('phone')).value}
              onChange={(ev) =>
                setValue(
                  'phone',
                  mask('(00) 00000-0000', ev.target.value).unmaskedValue,
                )
              }
            />
            <Form.Message>{errors.phone?.message}</Form.Message>
          </Form.Group>
          <Form.Group>
            <Form.Label>Birth</Form.Label>
            <Datepicker
              onSelect={(ev) => ev && setValue('birth', ev)}
              selected={watch('birth')}
              placeholder="00/00/0000"
            />
            <Form.Message>{errors.birth?.message}</Form.Message>
          </Form.Group>
          <Form.Group className="col-span-full">
            <Form.Label>Description</Form.Label>
            <Textarea
              onChange={(ev) => setValue('description', ev.target.value)}
              value={watch('description')}
              placeholder="Description about you"
            />
            <Form.Message>{errors.description?.message}</Form.Message>
          </Form.Group>
          {!isEditing && (
            <>
              <Form.Group className="col-span-full">
                <Form.Label>Email</Form.Label>
                <Input
                  onChange={(ev) => setValue('email', ev.target.value)}
                  value={watch('email')}
                  placeholder="johndoe@email.com"
                />
                <Form.Message>{errors.email?.message}</Form.Message>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Input
                  onChange={(ev) => setValue('password', ev.target.value)}
                  value={watch('password')}
                  type={isShowingPassword ? 'text' : 'password'}
                  placeholder="Strong password here"
                />
                <Form.Message>{errors.password?.message}</Form.Message>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password Confirm</Form.Label>
                <Input
                  onChange={(ev) =>
                    setValue('passwordConfirm', ev.target.value)
                  }
                  value={watch('passwordConfirm')}
                  type={isShowingPassword ? 'text' : 'password'}
                  placeholder="Strong password here"
                />
                <Form.Message>{errors.passwordConfirm?.message}</Form.Message>
              </Form.Group>
              <Form.Group className="col-span-full">
                <Checkbox
                  onCheckedChange={() =>
                    setIsShowingPassword(!isShowingPassword)
                  }
                  checked={isShowingPassword}
                  placeholder={tForm('showPassword')}
                />
              </Form.Group>
            </>
          )}
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Input
              onChange={(ev) => setValue('address', ev.target.value)}
              value={watch('address')}
              placeholder="Brazil, SP"
            />
            <Form.Message>{errors.address?.message}</Form.Message>
          </Form.Group>
          <Form.Group>
            <Form.Label>Postal Code</Form.Label>
            <Input
              placeholder="00000-000"
              value={mask('00000-000', watch('postal')).value}
              onChange={(ev) =>
                setValue(
                  'postal',
                  mask('00000-000', ev.target.value).unmaskedValue,
                )
              }
            />
            <Form.Message>{errors.postal?.message}</Form.Message>
          </Form.Group>
        </div>
        <Button type="submit" className="mt-2" disabled={isLoading}>
          <UserPlus />
          Concluir
        </Button>
      </Form.Root>
    )
  },
)
UsersCommonForm.displayName = 'UsersCommonForm'

export default UsersCommonForm
