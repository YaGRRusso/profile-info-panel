import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...rest }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...rest} />
))
TableHeader.displayName = 'TableHeader'
