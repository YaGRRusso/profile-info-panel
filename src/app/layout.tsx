import Body from './components/Body'
import { Providers } from './providers'

import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profile Info',
  description: 'Management of profile infos',
  icons: './favicon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <Providers>
        <Body className={montserrat.className}>
          <div className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
            {children}
          </div>
        </Body>
      </Providers>
    </html>
  )
}
