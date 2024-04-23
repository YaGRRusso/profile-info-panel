import ProfileForm from './components/components/Form'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Profile() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="mx-auto flex h-full w-full max-w-3xl flex-col gap-8">
      <TitleDesc
        title={tSidebar('profile')}
        description={tHome('underDevelopment')}
      />
      <ProfileForm />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Management of profile infos',
}
