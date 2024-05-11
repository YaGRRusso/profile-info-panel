'use client'

import { Link } from '@/common/navigation'
import UsersCommonForm from '@/forms/UsersCommonForm'
import { useUsersCreate } from '@/hooks'

import { useTranslations } from 'next-intl'
import { FC, FormHTMLAttributes } from 'react'

export interface SignUpFormProps extends FormHTMLAttributes<HTMLFormElement> {}

const SignUpForm: FC<SignUpFormProps> = () => {
  const tSignUp = useTranslations('signUp')
  const createUser = useUsersCreate()

  return (
    <>
      <UsersCommonForm
        isLoading={createUser.isPending}
        handleSubmit={(data) => createUser.mutate(data as any)}
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
