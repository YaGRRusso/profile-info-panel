import ProjectsTable from './components/Table'

import { TitleDesc } from '@/components'

import { useTranslations } from 'next-intl'

export default function Projects() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <TitleDesc
        title={tSidebar('projects')}
        description={tHome('underDevelopment')}
      />
      <ProjectsTable />
    </main>
  )
}
