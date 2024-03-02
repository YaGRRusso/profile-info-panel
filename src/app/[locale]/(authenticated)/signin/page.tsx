import SignInForm from './components/SignInForm'

import { FormContainer } from '@/components'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export default async function SignIn() {
  const tSignIn = await getTranslations('signIn')

  return (
    <FormContainer
      title={tSignIn('welcome')}
      description={tSignIn('provideYourInfos')}
    >
      <SignInForm />
    </FormContainer>
  )
}

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Management of profile infos',
}