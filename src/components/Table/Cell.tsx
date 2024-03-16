import { cn } from '@/lib/utils'

import { TdHTMLAttributes, forwardRef } from 'react'

export const TableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...rest }, ref) => (
  <td
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...rest}
  />
))
TableCell.displayName = 'TableCell'
