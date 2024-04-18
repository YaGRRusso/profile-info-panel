'use client'

import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'react'

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {}

const DialogFooter = ({ className, ...rest }: DialogFooterProps) => (
  <div
    className={cn(
      'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...rest}
  />
)
DialogFooter.displayName = 'DialogFooter'

export default DialogFooter
