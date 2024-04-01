import FormationsTable from './components/Table'

import { TitleDesc, Button } from '@/components'

import { Plus } from '@phosphor-icons/react/dist/ssr'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Formations() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <div className="flex items-end justify-between">
        <TitleDesc
          title={tSidebar('formations')}
          description={tHome('underDevelopment')}
        />
        <Button variant="outline">
          <Plus />
          Add Formation
        </Button>
      </div>
      <FormationsTable />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Formations',
  description: 'Management of formations profile infos',
}
