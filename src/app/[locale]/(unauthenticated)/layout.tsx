import Body from '../components/Body'
import { Providers } from '../providers'

import { Link } from '@/common/navigation'
import { ThemeChanger } from '@/components'
import { cn } from '@/lib/utils'

import { GithubLogo, House, Translate } from '@phosphor-icons/react/dist/ssr'
import { Montserrat } from 'next/font/google'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans' })

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: { locale: string }
}>) {
  const locale = useLocale()
  const messages = await getMessages()

  return (
    <html lang={params.locale}>
      <Providers>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Body.Root
            className={cn('font-sans antialiased', montserrat.variable)}
          >
            <Body.Main>
              <main className="mx-auto flex max-w-xl flex-1 flex-col items-center justify-center gap-8 py-12">
                <div className="flex w-full items-center gap-2 text-lg">
                  <Link href="/home" target="_blank">
                    <House />
                  </Link>
                  <Link href="https://github.com/YaGRRusso" target="_blank">
                    <GithubLogo />
                  </Link>
                  <ThemeChanger />
                  <Link href="/" locale={locale === 'pt' ? 'en' : 'pt'}>
                    <Translate />
                  </Link>
                </div>
                {children}
              </main>
            </Body.Main>
          </Body.Root>
        </NextIntlClientProvider>
      </Providers>
    </html>
  )
}
