import SignInForm from './components/SignInForm'

import { Metadata } from 'next'

export default async function SignIn() {
  return (
    <main className="mx-auto flex max-w-xl items-stretch rounded bg-gray-900 text-gray-50 shadow">
      <div className="rounded-l bg-sky-600 p-12 max-sm:hidden" />
      <div className="flex flex-1 flex-col items-center justify-center gap-8 rounded-r p-12 max-sm:px-4">
        <div className="w-full">
          <h1 className="text-3xl font-bold">Bem-vindo!</h1>
          <span className="text-gray-400">
            Forneça suas informações de login abaixo.
          </span>
        </div>
        <SignInForm />
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Management of profile infos',
}
