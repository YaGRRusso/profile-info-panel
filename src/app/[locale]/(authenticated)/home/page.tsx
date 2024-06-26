import ApiInfo from './components/Buttons/ApiInfo'
import DialogInfo from './components/Buttons/DialogInfo'
import SessionInfo from './components/Buttons/SessionInfo'
import ToastInfo from './components/Buttons/ToastInfo'

import { Link } from '@/common/navigation'
import { Divider, Logos, ThemeChanger } from '@/components'

import { CircleNotch, GithubLogo, Translate } from '@phosphor-icons/react/dist/ssr'
import { Metadata } from 'next'
import { useLocale, useTranslations } from 'next-intl'

export default function Home() {
  const locale = useLocale()
  const tHome = useTranslations('home')

  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-16">
      <div className="flex items-center justify-center gap-4 text-xl text-gray-800 dark:text-gray-400 [&_*:disabled]:opacity-50">
        <ApiInfo />
        <SessionInfo />
        <Divider className="h-4" orientation="vertical" />
        <Link href="https://github.com/YaGRRusso" target="_blank">
          <GithubLogo />
        </Link>
        <ThemeChanger />
        <Link href="/" locale={locale === 'pt' ? 'en' : 'pt'}>
          <Translate />
        </Link>
        <Divider className="h-4" orientation="vertical" />
        <ToastInfo />
        <DialogInfo />
      </div>
      <div className="flex items-center justify-center gap-6 max-md:flex-col max-md:text-center">
        <Logos />
        <h1 className="flex flex-col gap-2 text-7xl">
          <span>Yago</span>
          <span>Russo</span>
        </h1>
      </div>
      <div className="flex animate-pulse items-center justify-center gap-4 text-center dark:text-gray-300">
        <CircleNotch className="animate-spin" />
        <span>{tHome('description')}</span>
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Management of profile infos',
}
