'use client'

import { ThemeContextProvider } from '@/contexts/theme'

import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}
