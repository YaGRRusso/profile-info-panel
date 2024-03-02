import SignUpForm from './components/SignUpForm'

import { FormContainer } from '@/components'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export default async function SignUp() {
  const tSignUp = await getTranslations('signUp')

  return (
    <FormContainer
      title={tSignUp('welcome')}
      description={tSignUp('provideYourInfos')}
    >
      <SignUpForm />
    </FormContainer>
  )
}

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Management of profile infos',
}
