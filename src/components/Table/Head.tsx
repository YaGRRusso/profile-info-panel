import { cn } from '@/lib/utils'

import { ThHTMLAttributes, forwardRef } from 'react'

export const TableHead = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...rest }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...rest}
  />
))
TableHead.displayName = 'TableHead'
