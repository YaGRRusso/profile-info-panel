'use client'

import { Link } from '@/common/navigation'
import { useToast } from '@/components'
import UsersCommonForm from '@/forms/UsersCommonForm'
import { CreateUserDto, useUsers } from '@/sdk'

import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { FC, FormHTMLAttributes } from 'react'

export interface SignUpFormProps extends FormHTMLAttributes<HTMLFormElement> {}

const SignUpForm: FC<SignUpFormProps> = () => {
  const { replace } = useRouter()
  const users = useUsers()
  const { toast } = useToast()
  const tSignUp = useTranslations('signUp')

  const createUser = useMutation({
    mutationFn: users.usersControllerCreate.bind(users),
    mutationKey: ['usersControllerCreate'],
    onSuccess: () => replace('/signin'),
    onError: ({ response }: AxiosError<any>) => {
      toast({
        title: response?.data.name,
        description: response?.data.message,
        variant: 'destructive',
      })
    },
  })

  return (
    <>
      <UsersCommonForm
        isLoading={createUser.isPending}
        handleSubmit={(data) => createUser.mutate(data as CreateUserDto)}
      />
      <span className='text-gray-300" text-sm'>
        {tSignUp('alreadyHaveAccount')}{' '}
        <Link className="emphasis" href="/signin">
          {tSignUp('signIn')}
        </Link>
      </span>
    </>
  )
}

SignUpForm.displayName = 'SignUpForm'

export default SignUpForm
