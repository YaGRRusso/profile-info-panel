'use client'

import { User } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { ButtonHTMLAttributes, FC } from 'react'

export interface SessionInfoProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SessionInfo: FC<SessionInfoProps> = ({ ...rest }) => {
  const { data: session } = useSession()

  return (
    <button onClick={() => console.log(session)} {...rest}>
      <User />
    </button>
  )
}

SessionInfo.displayName = 'SessionInfo'

export default SessionInfo
