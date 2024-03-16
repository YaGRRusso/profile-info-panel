import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-gray-500 dark:text-gray-400', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'
