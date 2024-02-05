import { clsx } from 'clsx'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profile Info',
  description: 'Management of profile infos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          montserrat.className,
          'dark:bg-slate-900 dark:text-slate-50',
        )}
      >
        {children}
      </body>
    </html>
  )
}
