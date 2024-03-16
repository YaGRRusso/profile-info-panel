import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...rest }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b border-gray-200 transition-colors hover:bg-gray-100/50 data-[state=selected]:bg-gray-100 dark:border-gray-900 dark:hover:bg-gray-800/50 dark:data-[state=selected]:bg-gray-800',
      className,
    )}
    {...rest}
  />
))
TableRow.displayName = 'TableRow'
