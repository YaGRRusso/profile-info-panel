import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export interface TableRootProps extends HTMLAttributes<HTMLTableElement> {}

export const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(
  ({ className, ...rest }, ref) => (
    <div className="relative w-full overflow-auto rounded">
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...rest}
      />
    </div>
  ),
)
TableRoot.displayName = 'TableRoot'
