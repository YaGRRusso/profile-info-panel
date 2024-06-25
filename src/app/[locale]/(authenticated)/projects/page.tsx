import ProjectsForm from './components/Form'
import ProjectsTable from './components/Table'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Projects() {
  const tProjects = useTranslations('projects')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <div className="flex justify-between gap-4 max-xs:flex-col">
        <TitleDesc title={tProjects('title')} description={tProjects('description')} />
        <ProjectsForm />
      </div>
      <ProjectsTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Management of projects profile infos',
}
