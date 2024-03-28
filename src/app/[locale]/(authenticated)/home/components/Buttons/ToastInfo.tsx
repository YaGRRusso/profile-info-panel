'use client'

import { ToastAction, useToast } from '@/components'
import { formatDate } from '@/helpers/date'

import { Bell } from '@phosphor-icons/react'
import { ButtonHTMLAttributes, FC } from 'react'

export interface ToastInfoProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ToastInfo: FC<ToastInfoProps> = ({ ...rest }) => {
  const { toast } = useToast()

  return (
    <button
      onClick={() =>
        toast({
          title: 'Title Here',
          description: formatDate(new Date()),
          action: <ToastAction altText="Close">Close</ToastAction>,
        })
      }
      {...rest}
    >
      <Bell />
    </button>
  )
}

ToastInfo.displayName = 'ToastInfo'

export default ToastInfo
