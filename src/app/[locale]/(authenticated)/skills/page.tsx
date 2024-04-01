import SkillsTable from './components/Table'

import { Button, TitleDesc } from '@/components'

import { Plus } from '@phosphor-icons/react/dist/ssr'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Skills() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <div className="flex items-end justify-between">
        <TitleDesc
          title={tSidebar('skills')}
          description={tHome('underDevelopment')}
        />
        <Button variant="outline">
          <Plus />
          Add Skill
        </Button>
      </div>
      <SkillsTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Management of skills profile infos',
}
