import { Metadata } from 'next'
import { ReactNode } from 'react'

import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return children
}

export const metadata: Metadata = {
  icons: './favicon.ico',
}
