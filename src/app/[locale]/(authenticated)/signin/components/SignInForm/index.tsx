'use client'

import { Button, Emphasis, TextInput, Form } from '@/components'

import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope, Eye, SignIn } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { FC, FormHTMLAttributes, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1),
})

type FormSchemaProps = z.infer<typeof formSchema>

export interface SignInFormProps extends FormHTMLAttributes<HTMLFormElement> {
  defaultValues?: Partial<FormSchemaProps>
}

const SignInForm: FC<SignInFormProps> = ({ defaultValues, ...rest }) => {
  const tSignIn = useTranslations('signIn')
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
      email: '',
      password: '',
      ...defaultValues,
    },
  })

  const onSubmit = useCallback(
    async (data: FormSchemaProps) => {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (res?.ok) replace('/')
    },
    [replace],
  )

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} {...rest}>
      <Form.Group title="Email" error={errors.email?.message}>
        <TextInput
          icon={<Envelope />}
          onChange={(ev) => setValue('email', ev.target.value)}
          value={watch('email')}
          placeholder={tForm('writeHere')}
        />
      </Form.Group>
      <Form.Group title="Password" error={errors.password?.message}>
        <TextInput
          icon={<Eye onClick={() => console.log('oi')} />}
          onChange={(ev) => setValue('password', ev.target.value)}
          value={watch('password')}
          type="password"
          placeholder={tForm('writeHere')}
        />
      </Form.Group>
      <span className='text-gray-300" text-sm'>
        {tSignIn('dontHaveAccount')}{' '}
        <Link href="/signup">
          <Emphasis>{tSignIn('signUp')}</Emphasis>
        </Link>
      </span>
      <Button type="submit" className="mt-2">
        <SignIn />
        {tSignIn('signIn')}
      </Button>
    </Form.Root>
  )
}

SignInForm.displayName = 'SignInForm'

export default SignInForm
