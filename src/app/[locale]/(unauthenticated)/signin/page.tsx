import SignInForm from './components/SignInForm'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export default async function SignIn() {
  const tSignIn = await getTranslations('signIn')

  return (
    // <FormContainer
    //   size="sm"
    //   icon={<SignInIcon />}
    //   title={tSignIn('welcome')}
    //   description={tSignIn('provideYourInfos')}
    // >
    <SignInForm />
  )
}

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Management of profile infos',
}
