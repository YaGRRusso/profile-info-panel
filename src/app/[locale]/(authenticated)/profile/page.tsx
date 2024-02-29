import { CircleNotch } from '@phosphor-icons/react/dist/ssr'
import { useTranslations } from 'next-intl'

export default function Profile() {
  const tHome = useTranslations('home')
  const tSidebar = useTranslations('sidebar')

  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-8">
      <h1 className="text-5xl">{tSidebar('profile')}</h1>
      <div className="flex animate-pulse items-center justify-center gap-4 text-center dark:text-gray-300">
        <CircleNotch className="animate-spin" />
        <span>{tHome('underDevelopment')}</span>
      </div>
    </main>
  )
}
