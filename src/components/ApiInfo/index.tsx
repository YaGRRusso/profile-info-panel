'use client'

import { unwrap } from '@/helpers/response'

import { Question } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { ButtonHTMLAttributes, FC } from 'react'

export interface ApiInfoProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ApiInfo: FC<ApiInfoProps> = ({ ...rest }) => {
  const { data } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      return await fetch('https://yagrrusso-info.onrender.com').then(unwrap)
    },
  })

  return (
    <button onClick={() => console.log(data)} {...rest}>
      <Question />
    </button>
  )
}

ApiInfo.displayName = 'ApiInfo'

export default ApiInfo
