import CoursesForm from './components/Form'
import CoursesTable from './components/Table'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Courses() {
  const tCourses = useTranslations('courses')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <div className="flex justify-between gap-4 max-xs:flex-col">
        <TitleDesc
          title={tCourses('title')}
          description={tCourses('description')}
        />
        <CoursesForm />
      </div>
      <CoursesTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Management of courses profile infos',
}
