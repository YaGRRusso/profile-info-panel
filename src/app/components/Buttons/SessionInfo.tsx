'use client'

import { useSessionContext } from '@/contexts/session'

import { User } from '@phosphor-icons/react'
import { ButtonHTMLAttributes, FC } from 'react'

export interface SessionInfoProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SessionInfo: FC<SessionInfoProps> = ({ ...rest }) => {
  const { session } = useSessionContext()

  return (
    <button onClick={() => console.log(session)} {...rest}>
      <User />
    </button>
  )
}

SessionInfo.displayName = 'SessionInfo'

export default SessionInfo
