'use client'

import { ThemeContextProvider } from '@/contexts/theme'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retryDelay: 1000 * 60 * 5, // 5min
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </QueryClientProvider>
  )
}
