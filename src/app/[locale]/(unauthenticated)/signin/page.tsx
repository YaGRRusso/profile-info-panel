import SignInForm from './components/SignInForm'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export default async function SignIn() {
  const tSignIn = await getTranslations('signIn')

  return (
    <div className="flex w-full flex-col gap-4">
      <TitleDesc
        description={tSignIn('provideYourInfos')}
        title={tSignIn('welcome')}
      />
      <SignInForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Management of profile infos',
}
