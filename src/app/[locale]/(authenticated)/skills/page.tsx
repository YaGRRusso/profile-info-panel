import SkillsForm from './components/Form'
import SkillsTable from './components/Table'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Skills() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <div className="flex justify-between gap-4 max-xs:flex-col">
        <TitleDesc
          title={tSidebar('skills')}
          description={tHome('underDevelopment')}
        />
        <SkillsForm />
      </div>
      <SkillsTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Management of skills profile infos',
}
