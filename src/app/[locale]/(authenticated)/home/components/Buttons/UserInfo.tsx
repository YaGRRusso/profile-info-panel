'use client'

import { cn } from '@/lib/utils'
import { useUsers } from '@/sdk'

import { Alien, CircleNotch } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { ButtonHTMLAttributes, FC } from 'react'

export interface UserInfoProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const UserInfo: FC<UserInfoProps> = ({ ...rest }) => {
  const users = useUsers()

  const { data, isFetching } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => await users.usersControllerFindMe(),
  })

  return (
    <button
      onClick={() => console.log(data)}
      className={cn(isFetching && 'pointer-events-none opacity-15')}
      {...rest}
    >
      {isFetching ? <CircleNotch className="animate-spin" /> : <Alien />}
    </button>
  )
}

UserInfo.displayName = 'UserInfo'

export default UserInfo
