'use client'

import { Tooltip } from '@/components'

import { User } from '@phosphor-icons/react'
import { useSession } from 'next-auth/react'
import { ButtonHTMLAttributes, FC } from 'react'

export interface SessionInfoProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SessionInfo: FC<SessionInfoProps> = ({ ...rest }) => {
  const { data: session } = useSession()

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button onClick={() => console.log(session)} {...rest}>
          <User />
        </button>
      </Tooltip.Trigger>
      <Tooltip.Content>Session Info</Tooltip.Content>
    </Tooltip.Root>
  )
}

SessionInfo.displayName = 'SessionInfo'

export default SessionInfo
