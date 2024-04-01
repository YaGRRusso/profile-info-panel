import CoursesTable from './components/Table'

import { Button, TitleDesc } from '@/components'

import { Plus } from '@phosphor-icons/react/dist/ssr'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Courses() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <div className="flex items-end justify-between">
        <TitleDesc
          title={tSidebar('courses')}
          description={tHome('underDevelopment')}
        />
        <Button variant="outline">
          <Plus />
          Add Course
        </Button>
      </div>
      <CoursesTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Management of courses profile infos',
}
