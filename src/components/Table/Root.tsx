import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export const TableRoot = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...rest }, ref) => (
  <div className="relative w-full overflow-auto rounded">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...rest}
    />
  </div>
))
TableRoot.displayName = 'TableRoot'
