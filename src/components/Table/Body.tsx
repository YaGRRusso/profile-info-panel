import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...rest }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...rest}
  />
))
TableBody.displayName = 'TableBody'
