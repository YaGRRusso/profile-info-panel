import CoursesTable from './components/Table'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Courses() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <TitleDesc
        title={tSidebar('courses')}
        description={tHome('underDevelopment')}
      />
      <CoursesTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Management of courses profile infos',
}
