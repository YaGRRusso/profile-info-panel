import ExperiencesTable from './components/Table'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Experiences() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <TitleDesc
        title={tSidebar('experiences')}
        description={tHome('underDevelopment')}
      />
      <ExperiencesTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Experiences',
  description: 'Management of experiences profile infos',
}
