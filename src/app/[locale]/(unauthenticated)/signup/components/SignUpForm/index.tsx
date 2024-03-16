'use client'

import { Button, Checkbox, Form, Input } from '@/components'
import { mask } from '@/helpers/mask'
import users from '@/services/users'

import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { FC, FormHTMLAttributes, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z
  .object({
    name: z.string().min(1),
    birth: z.string().min(1),
    description: z.string().min(1),
    email: z.string().min(1).email(),
    password: z.string().min(1),
    nickname: z.string().min(1),
    phone: z.string().min(1),
    picture: z.string(),
    postal: z.string().min(1),
    presentation: z.string(),
    address: z.string().min(1),
    title: z.string().min(1),
    passwordConfirm: z.string().min(1).optional(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'sameValue',
    path: ['passwordConfirm'],
  })

type FormSchemaProps = z.infer<typeof formSchema>

export interface SignUpFormProps extends FormHTMLAttributes<HTMLFormElement> {
  defaultValues?: Partial<FormSchemaProps>
}

const SignUpForm: FC<SignUpFormProps> = ({ defaultValues, ...rest }) => {
  const [isShowingPassword, setIsShowingPassword] = useState(false)
  const tSignUp = useTranslations('signUp')
  const tForm = useTranslations('form')
  const { replace } = useRouter()

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: '',
      birth: '',
      description: '',
      email: '',
      name: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
      phone: '',
      picture: 'https://picsum.photos/60',
      postal: '',
      presentation: 'empty',
      title: '',
      ...defaultValues,
    },
  })

  const onSubmit = useCallback(
    async (data: FormSchemaProps) => {
      delete data.passwordConfirm
      data.birth = new Date(data.birth).toISOString()
      const res = await users.postUser(data)

      if (res) replace('/signin')
    },
    [replace],
  )

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} {...rest}>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] gap-x-6 gap-y-4">
        <Form.Group className="col-span-full">
          <Input
            onChange={(ev) => setValue('name', ev.target.value)}
            value={watch('name')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group>
          <Input
            onChange={(ev) => setValue('nickname', ev.target.value)}
            value={watch('nickname')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group>
          <Input
            onChange={(ev) => setValue('title', ev.target.value)}
            value={watch('title')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group>
          <Input
            placeholder={tForm('writeHere')}
            value={mask('(00) 00000-0000', watch('phone')).value}
            onChange={(ev) =>
              setValue(
                'phone',
                mask('(00) 00000-0000', ev.target.value).unmaskedValue,
              )
            }
          />
        </Form.Group>
        <Form.Group>
          <Input
            onChange={(ev) => setValue('birth', ev.target.value)}
            value={watch('birth')}
            placeholder={tForm('writeHere')}
            type="date"
          />
        </Form.Group>
        <Form.Group className="col-span-full">
          <Input
            onChange={(ev) => setValue('description', ev.target.value)}
            value={watch('description')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group className="col-span-full">
          <Input
            onChange={(ev) => setValue('email', ev.target.value)}
            value={watch('email')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group>
          <Input
            onChange={(ev) => setValue('password', ev.target.value)}
            value={watch('password')}
            type={isShowingPassword ? 'text' : 'password'}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group>
          <Input
            onChange={(ev) => setValue('passwordConfirm', ev.target.value)}
            value={watch('passwordConfirm')}
            type={isShowingPassword ? 'text' : 'password'}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group className="col-span-full">
          <Checkbox
            onCheckedChange={() => setIsShowingPassword(!isShowingPassword)}
            checked={isShowingPassword}
            placeholder={tForm('showPassword')}
          />
        </Form.Group>
        <Form.Group>
          <Input
            onChange={(ev) => setValue('address', ev.target.value)}
            value={watch('address')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group>
          <Input
            placeholder={tForm('writeHere')}
            value={mask('00000-000', watch('postal')).value}
            onChange={(ev) =>
              setValue(
                'postal',
                mask('00000-000', ev.target.value).unmaskedValue,
              )
            }
          />
        </Form.Group>
      </div>
      <span className='text-gray-300" text-sm'>
        {tSignUp('alreadyHaveAccount')}{' '}
        <Link href="/signup">{tSignUp('signIn')}</Link>
      </span>
      <Button type="submit" className="mt-2">
        <User />
        {tSignUp('signUp')}
      </Button>
    </Form.Root>
  )
}

SignUpForm.displayName = 'SignUpForm'

export default SignUpForm
