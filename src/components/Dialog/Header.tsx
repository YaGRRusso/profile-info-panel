'use client'

import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'react'

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const DialogHeader = ({ className, ...rest }: DialogHeaderProps) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className,
    )}
    {...rest}
  />
)
DialogHeader.displayName = 'DialogHeader'

export default DialogHeader
