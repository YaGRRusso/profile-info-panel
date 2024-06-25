'use client'

import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'react'

export interface AlertDialogHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const AlertDialogHeader = ({ className, ...rest }: AlertDialogHeaderProps) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...rest} />
)
AlertDialogHeader.displayName = 'AlertDialogHeader'

export default AlertDialogHeader
