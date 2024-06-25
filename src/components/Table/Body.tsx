import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...rest }, ref) => (
    <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...rest} />
  ),
)
TableBody.displayName = 'TableBody'
