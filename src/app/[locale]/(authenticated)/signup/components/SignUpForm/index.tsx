'use client'

import { Button, Emphasis, TextInput, Form } from '@/components'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  Cake,
  Envelope,
  Eye,
  IdentificationCard,
  Image,
  List,
  Package,
  Phone,
  PushPin,
  User,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FC, FormHTMLAttributes, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1),
  birth: z.string().min(1).datetime(),
  description: z.string().min(1),
  email: z.string().min(1).email(),
  password: z.string().min(1),
  nickname: z.string().min(1),
  phone: z.string().min(1),
  picture: z.string().min(1),
  postal: z.string().min(1),
  presentation: z.string().min(1),
  address: z.string().min(1),
  title: z.string().min(1),
})

type FormSchemaProps = z.infer<typeof formSchema>

export interface SignUpFormProps extends FormHTMLAttributes<HTMLFormElement> {
  defaultValues?: Partial<FormSchemaProps>
}

const SignUpForm: FC<SignUpFormProps> = ({ defaultValues, ...rest }) => {
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
      birth: '1970-12-31T12:00:00.000Z',
      description: '',
      email: '',
      name: '',
      nickname: '',
      password: '',
      phone: '',
      picture: 'https://picsum.photos/60',
      postal: '',
      presentation: '',
      title: '',
      ...defaultValues,
    },
  })

  const onSubmit = useCallback(async (data: FormSchemaProps) => {
    console.log(data)
  }, [])

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} {...rest}>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,1fr))] gap-x-6 gap-y-4">
        <Form.Group title="Name" error={errors.name?.message}>
          <TextInput
            icon={<User />}
            onChange={(ev) => setValue('name', ev.target.value)}
            value={watch('name')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Description" error={errors.description?.message}>
          <TextInput
            icon={<List />}
            onChange={(ev) => setValue('description', ev.target.value)}
            value={watch('description')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Birth" error={errors.birth?.message}>
          <TextInput
            icon={<Cake />}
            onChange={(ev) => setValue('birth', ev.target.value)}
            value={watch('birth')}
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
        <Form.Group title="Email" error={errors.email?.message}>
          <TextInput
            icon={<Envelope />}
            onChange={(ev) => setValue('email', ev.target.value)}
            value={watch('email')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Senha" error={errors.password?.message}>
          <TextInput
            icon={<Eye onClick={() => console.log('oi')} />}
            onChange={(ev) => setValue('password', ev.target.value)}
            value={watch('password')}
            type="password"
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Phone" error={errors.phone?.message}>
          <TextInput
            icon={<Phone />}
            onChange={(ev) => setValue('phone', ev.target.value)}
            value={watch('phone')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Picture" error={errors.picture?.message}>
          <TextInput
            // eslint-disable-next-line jsx-a11y/alt-text
            icon={<Image />}
            onChange={(ev) => setValue('picture', ev.target.value)}
            value={watch('picture')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Postal" error={errors.postal?.message}>
          <TextInput
            icon={<Package />}
            onChange={(ev) => setValue('postal', ev.target.value)}
            value={watch('postal')}
            placeholder={tForm('writeHere')}
          />
        </Form.Group>
        <Form.Group title="Presentation" error={errors.presentation?.message}>
          <TextInput
            icon={<List />}
            onChange={(ev) => setValue('presentation', ev.target.value)}
            value={watch('presentation')}
            placeholder={tForm('writeHere')}
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
        <Form.Group title="Title" error={errors.title?.message}>
          <TextInput
            icon={<IdentificationCard />}
            onChange={(ev) => setValue('title', ev.target.value)}
            value={watch('title')}
            placeholder={tForm('writeHere')}
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
