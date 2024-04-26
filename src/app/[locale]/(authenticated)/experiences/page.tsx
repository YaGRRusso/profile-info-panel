import ExperiencesForm from './components/Form'
import ExperiencesTable from './components/Table'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Experiences() {
  const tExperiences = useTranslations('experiences')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <div className="flex justify-between gap-4 max-xs:flex-col">
        <TitleDesc
          title={tExperiences('title')}
          description={tExperiences('description')}
        />
        <ExperiencesForm />
      </div>
      <ExperiencesTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Experiences',
  description: 'Management of experiences profile infos',
}
