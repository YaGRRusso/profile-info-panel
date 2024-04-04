import ProjectsTable from './components/Table'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Projects() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <div className="flex items-end justify-between">
        <TitleDesc
          title={tSidebar('projects')}
          description={tHome('underDevelopment')}
        />
      </div>
      <ProjectsTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Management of projects profile infos',
}
