import SignUpForm from './components/SignUpForm'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export default async function SignUp() {
  const tSignUp = await getTranslations('signUp')

  return (
    // <FormContainer
    //   icon={<UserPlus />}
    //   title={tSignUp('welcome')}
    //   description={tSignUp('provideYourInfos')}
    // >
    <SignUpForm />
  )
}

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Management of profile infos',
}
