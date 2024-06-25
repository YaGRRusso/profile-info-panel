import FormationsForm from './components/Form'
import FormationsTable from './components/Table'

import { TitleDesc } from '@/components'

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Formations() {
  const tFormations = useTranslations('formations')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <div className="flex justify-between gap-4 max-xs:flex-col">
        <TitleDesc title={tFormations('title')} description={tFormations('description')} />
        <FormationsForm />
      </div>
      <FormationsTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Formations',
  description: 'Management of formations profile infos',
}
