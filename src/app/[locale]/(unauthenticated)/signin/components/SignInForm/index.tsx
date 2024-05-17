'use client'

import { Button, Form, Input, useToast } from '@/components'

import { zodResolver } from '@hookform/resolvers/zod'
import { SignIn } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { FC, FormHTMLAttributes, useCallback, useState } from 'react'
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
  const tForm = useTranslations('form')
  const tSignIn = useTranslations('signIn')
  const [isLoading, setIsLoading] = useState(false)
  const { replace } = useRouter()
  const { toast } = useToast()

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
      setIsLoading(true)
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })
      setIsLoading(false)

      if (!res?.ok)
        return toast({
          title: `Error ${res?.status}`,
          description: res?.error,
          variant: 'destructive',
        })

      replace('/')
    },
    [replace, toast],
  )

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} {...rest}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Input
          onChange={(ev) => setValue('email', ev.target.value)}
          value={watch('email')}
          placeholder="johndoe@email.com"
        />
        <Form.Message>
          {errors.email && tForm(errors.email?.message)}
        </Form.Message>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Input
          onChange={(ev) => setValue('password', ev.target.value)}
          value={watch('password')}
          type="password"
          placeholder="Your password"
        />
        <Form.Message>
          {errors.password && tForm(errors.password?.message)}
        </Form.Message>
      </Form.Group>
      <span className='text-gray-300" text-sm'>
        {tSignIn('dontHaveAccount')}{' '}
        <Link className="emphasis" href="/signup">
          {tSignIn('signUp')}
        </Link>
      </span>
      <Button type="submit" className="mt-2" disabled={isLoading}>
        <SignIn />
        {tSignIn('signIn')}
      </Button>
    </Form.Root>
  )
}

SignInForm.displayName = 'SignInForm'

export default SignInForm
