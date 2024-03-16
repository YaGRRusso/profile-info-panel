import Body from '../components/Body'
import { Providers } from '../providers'

import { cn } from '@/lib/utils'

import { Montserrat } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
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
                {children}
              </main>
            </Body.Main>
          </Body.Root>
        </NextIntlClientProvider>
      </Providers>
    </html>
  )
}
