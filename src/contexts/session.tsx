'use client'

import { auth } from '../services'

import Cookies from 'js-cookie'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type SessionProps = {
  id: string
  email: string
  name: string
  role: any
}

export interface SessionContextProps {
  session: SessionProps | undefined
  setSession: (data: SessionProps) => void
  clearSession: () => void
}

const SessionContext = createContext({} as SessionContextProps)

export const SessionContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [session, setSession] = useState<SessionProps>()

  const handleChangeSession = useCallback((data: SessionProps) => {
    setSession(data)
    localStorage.setItem('user', JSON.stringify(data))
  }, [])

  const handleClearSession = useCallback(() => {
    setSession(undefined)
    localStorage.removeItem('user')
    Cookies.remove('session')
  }, [])

  const handleGetSession = useCallback(async () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user') as string)
      return handleChangeSession(user)
    }

    if (Cookies.get('session')) {
      const user = await auth.getMe()
      return handleChangeSession(user)
    }
  }, [handleChangeSession])

  useEffect(() => {
    if (!session) handleGetSession()
  }, [handleGetSession, session])

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession: handleChangeSession,
        clearSession: handleClearSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSessionContext = (): SessionContextProps => {
  const context = useContext(SessionContext)

  if (context === undefined) {
    throw new Error('useSessionContext must be used within an provider')
  }

  return context
}
