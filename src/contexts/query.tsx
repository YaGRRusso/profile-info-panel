'use client'

import { usePathname, useRouter } from '@/common/navigation'

import { useSearchParams } from 'next/navigation'
import { parse, stringify } from 'qs'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface CommonQueryParams {
  page?: string
  limit?: string
}

interface QueryParamsContextProps<T = any> {
  params: T
  setParams: Dispatch<SetStateAction<T>>
}

const QueryParamsContext = createContext<QueryParamsContextProps>({} as QueryParamsContextProps)

export function QueryParamsProvider<T extends object>({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [params, setParams] = useState<T>(parse(searchParams.toString()) as T)

  useEffect(() => {
    setParams(parse(searchParams.toString()) as T)
  }, [searchParams])

  useEffect(() => {
    const url = pathname + '?' + stringify(params)
    router.push(url)
  }, [params, pathname, router])

  return (
    <QueryParamsContext.Provider value={{ params, setParams }}>
      {children}
    </QueryParamsContext.Provider>
  )
}

export function useQueryParams<T extends object>(): QueryParamsContextProps<T> {
  const context = useContext(QueryParamsContext) as QueryParamsContextProps<T>

  if (context === undefined) {
    throw new Error('useQueryParams context must be used within an provider')
  }

  return context
}
