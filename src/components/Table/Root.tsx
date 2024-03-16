import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export const TableRoot = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
))
TableRoot.displayName = 'TableRoot'
