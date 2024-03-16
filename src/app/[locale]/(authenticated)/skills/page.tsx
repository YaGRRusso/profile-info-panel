import PageTable from './components/Table'

import { TitleDesc } from '@/components'

import { useTranslations } from 'next-intl'

export default function Skills() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col gap-8">
      <TitleDesc
        title={tSidebar('skills')}
        description={tHome('underDevelopment')}
      />
      <PageTable />
    </main>
  )
}
