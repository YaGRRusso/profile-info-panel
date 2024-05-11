'use client'

import { Tooltip } from '@/components'
import { useRootInfo } from '@/hooks'
import { cn } from '@/lib/utils'

import { CircleNotch, Question } from '@phosphor-icons/react'
import { ButtonHTMLAttributes, FC } from 'react'

export interface ApiInfoProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ApiInfo: FC<ApiInfoProps> = ({ ...rest }) => {
  const { data, isFetching } = useRootInfo()

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button
          onClick={() => console.log(data)}
          className={cn(isFetching && 'pointer-events-none opacity-15')}
          {...rest}
        >
          {isFetching ? <CircleNotch className="animate-spin" /> : <Question />}
        </button>
      </Tooltip.Trigger>
      <Tooltip.Content>API Info</Tooltip.Content>
    </Tooltip.Root>
  )
}

ApiInfo.displayName = 'ApiInfo'

export default ApiInfo
