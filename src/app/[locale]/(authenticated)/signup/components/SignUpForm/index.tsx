'use client'

import { Button, Emphasis, TextInput, Form } from '@/components'
import CheckboxInput from '@/components/Inputs/Checkbox'
import TextAreaInput from '@/components/Inputs/TextArea'
import { mask } from '@/helpers/mask'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  Cake,
  Envelope,
  Eye,
  IdentificationCard,
  List,
  Package,
  Phone,
  PushPin,
  User,
} from '@phosphor-icons/react'
import Link from 'next/link'
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
    picture: z.string().optional(),
    postal: z.string().min(1),
    presentation: z.string().optional(),
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
      presentation: '',
      title: '',
      ...defaultValues,
    },
  })

  const onSubmit = useCallback(async (data: FormSchemaProps) => {
    delete data.passwordConfirm
    console.log(data)
  }, [])

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} {...rest}>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] gap-x-6 gap-y-4">
        <Form.Group
          title="Name"
          error={errors.name?.message}
          className="col-span-full"
        >
          <TextInput
            icon={<User />}
            onChange={(ev) => setValue('name', ev.target.value)}
            value={watch('name')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Nickname" error={errors.nickname?.message}>
          <TextInput
            icon={<User />}
            onChange={(ev) => setValue('nickname', ev.target.value)}
            value={watch('nickname')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Title" error={errors.title?.message}>
          <TextInput
            icon={<IdentificationCard />}
            onChange={(ev) => setValue('title', ev.target.value)}
            value={watch('title')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Phone" error={errors.phone?.message}>
          <TextInput
            icon={<Phone />}
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
        <Form.Group title="Birth" error={errors.birth?.message}>
          <TextInput
            icon={<Cake />}
            onChange={(ev) => setValue('birth', ev.target.value)}
            value={watch('birth')}
            placeholder={tForm('writeHere')}
            type="date"
          />
        </Form.Group>
        <Form.Group
          title="Description"
          error={errors.description?.message}
          className="col-span-full"
        >
          <TextAreaInput
            icon={<List />}
            onChange={(ev) => setValue('description', ev.target.value)}
            value={watch('description')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group
          title="Email"
          error={errors.email?.message}
          className="col-span-full"
        >
          <TextInput
            icon={<Envelope />}
            onChange={(ev) => setValue('email', ev.target.value)}
            value={watch('email')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Password" error={errors.password?.message}>
          <TextInput
            icon={<Eye />}
            onChange={(ev) => setValue('password', ev.target.value)}
            value={watch('password')}
            type={isShowingPassword ? 'text' : 'password'}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group
          title="Password Confirm"
          error={errors.passwordConfirm?.message}
        >
          <TextInput
            icon={<Eye />}
            onChange={(ev) => setValue('passwordConfirm', ev.target.value)}
            value={watch('passwordConfirm')}
            type={isShowingPassword ? 'text' : 'password'}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group className="col-span-full">
          <CheckboxInput
            onChange={() => setIsShowingPassword(!isShowingPassword)}
            checked={isShowingPassword}
            placeholder={tForm('showPassword')}
          />
        </Form.Group>
        <Form.Group title="Address" error={errors.address?.message}>
          <TextInput
            icon={<PushPin />}
            onChange={(ev) => setValue('address', ev.target.value)}
            value={watch('address')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Postal" error={errors.postal?.message}>
          <TextInput
            icon={<Package />}
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
        <Link href="/signup">
          <Emphasis>{tSignUp('signIn')}</Emphasis>
        </Link>
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
