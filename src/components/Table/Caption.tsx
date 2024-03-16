import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...rest }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-gray-500 dark:text-gray-400', className)}
    {...rest}
  />
))
TableCaption.displayName = 'TableCaption'
