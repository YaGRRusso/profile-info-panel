'use client'

import errorMap from '@/common/zod'
import { Tooltip } from '@/components'
import NextAuthProvider from '@/contexts/auth'
import { ThemeContextProvider } from '@/contexts/theme'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { z } from 'zod'

z.setErrorMap(errorMap)

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
      <NextAuthProvider>
        <ThemeContextProvider>
          <Tooltip.Provider>{children}</Tooltip.Provider>
        </ThemeContextProvider>
      </NextAuthProvider>
    </QueryClientProvider>
  )
}
