'use client'

import { Button, Emphasis, TextInput, Form } from '@/components'

import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope, Eye, SignIn } from '@phosphor-icons/react'
import Link from 'next/link'
import { FC, FormHTMLAttributes, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1),
})

type FormSchemaProps = z.infer<typeof formSchema>

export interface SignInFormProps extends FormHTMLAttributes<HTMLFormElement> {}

const SignInForm: FC<SignInFormProps> = ({ ...rest }) => {
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
    },
  })

  const onSubmit = useCallback((data: FormSchemaProps) => {
    console.log(data)
  }, [])

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)} {...rest}>
      <Form.Group title="Email" error={errors.email?.message}>
        <TextInput
          icon={<Envelope />}
          onChange={(ev) => setValue('email', ev.target.value)}
          value={watch('email')}
          placeholder="Digite seu email..."
        />
      </Form.Group>
      <Form.Group title="Senha" error={errors.password?.message}>
        <TextInput
          icon={<Eye onClick={() => console.log('oi')} />}
          onChange={(ev) => setValue('password', ev.target.value)}
          value={watch('password')}
          type="password"
          placeholder="Digite sua senha..."
        />
      </Form.Group>
      <div className="flex items-end gap-1 text-sm text-gray-300">
        <span>Não tem uma conta?</span>
        <Link href="/signup">
          <Emphasis>Criar conta</Emphasis>
        </Link>
      </div>
      <Button type="submit" className="mt-2">
        <SignIn />
        Entrar
      </Button>
    </Form.Root>
  )
}

SignInForm.displayName = 'SignInForm'

export default SignInForm
