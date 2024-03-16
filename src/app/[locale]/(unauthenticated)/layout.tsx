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
            <Body.Main>{children}</Body.Main>
          </Body.Root>
        </NextIntlClientProvider>
      </Providers>
    </html>
  )
}
