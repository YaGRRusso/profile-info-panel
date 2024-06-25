import SignUpForm from './components/SignUpForm'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export default async function SignUp() {
  const tSignUp = await getTranslations('signUp')

  return (
    <div className="flex w-full flex-col gap-4">
      <TitleDesc description={tSignUp('provideYourInfos')} title={tSignUp('welcome')} />
      <SignUpForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Management of profile infos',
}
