'use client'

import { Button, Checkbox, Form, Input, Textarea, useToast } from '@/components'
import { mask } from '@/helpers/mask'
import { tryCatch } from '@/helpers/request'
import { useUsers } from '@/sdk'

import { zodResolver } from '@hookform/resolvers/zod'
import { UserPlus } from '@phosphor-icons/react'
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
  const users = useUsers()
  const { toast } = useToast()

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
      title: '',
      ...defaultValues,
    },
  })

  const onSubmit = useCallback(
    async (data: FormSchemaProps) => {
      delete data.passwordConfirm
      data.birth = new Date(data.birth).toISOString()
      const res = await tryCatch(users.usersControllerCreate(data))

      if (res instanceof Error) {
        return toast({
          title: `Error ${res.name}`,
          description: res.message,
          variant: 'destructive',
        })
      }

      replace('/signin')
    },
    [replace, toast, users],
  )

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} {...rest}>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] gap-x-6 gap-y-4">
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
          <Input
            onChange={(ev) => setValue('birth', ev.target.value)}
            value={watch('birth')}
            type="date"
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
            onChange={(ev) => setValue('passwordConfirm', ev.target.value)}
            value={watch('passwordConfirm')}
            type={isShowingPassword ? 'text' : 'password'}
            placeholder="Strong password here"
          />
          <Form.Message>{errors.passwordConfirm?.message}</Form.Message>
        </Form.Group>
        <Form.Group className="col-span-full">
          <Checkbox
            onCheckedChange={() => setIsShowingPassword(!isShowingPassword)}
            checked={isShowingPassword}
            placeholder={tForm('showPassword')}
          />
        </Form.Group>
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
      <span className='text-gray-300" text-sm'>
        {tSignUp('alreadyHaveAccount')}{' '}
        <Link className="emphasis" href="/signin">
          {tSignUp('signIn')}
        </Link>
      </span>
      <Button type="submit" className="mt-2">
        <UserPlus />
        {tSignUp('signUp')}
      </Button>
    </Form.Root>
  )
}

SignUpForm.displayName = 'SignUpForm'

export default SignUpForm
