import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b transition-colors hover:bg-gray-100/50 data-[state=selected]:bg-gray-100 dark:hover:bg-gray-800/50 dark:data-[state=selected]:bg-gray-800',
      className,
    )}
    {...props}
  />
))
TableRow.displayName = 'TableRow'
