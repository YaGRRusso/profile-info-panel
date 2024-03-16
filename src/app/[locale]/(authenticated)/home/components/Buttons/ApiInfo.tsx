'use client'

import { cn } from '@/lib/utils'
import { GetHelloOutput, root } from '@/services'

import { CircleNotch, Question } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { ButtonHTMLAttributes, FC } from 'react'

export interface ApiInfoProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ApiInfo: FC<ApiInfoProps> = ({ ...rest }) => {
  const { data, isFetching } = useQuery<GetHelloOutput>({
    queryKey: ['info'],
    queryFn: async () => await root.getHello(),
  })

  return (
    <button
      onClick={() => console.log(data)}
      className={cn(isFetching && 'pointer-events-none opacity-15')}
      {...rest}
    >
      {isFetching ? <CircleNotch className="animate-spin" /> : <Question />}
    </button>
  )
}

ApiInfo.displayName = 'ApiInfo'

export default ApiInfo
