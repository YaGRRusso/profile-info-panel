'use client'

import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'react'

export interface AlertDialogFooterProps extends HTMLAttributes<HTMLDivElement> {}

const AlertDialogFooter = ({ className, ...rest }: AlertDialogFooterProps) => (
  <div
    className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...rest}
  />
)
AlertDialogFooter.displayName = 'AlertDialogFooter'

export default AlertDialogFooter
