import { TableCaption } from './Caption'

import { IconText } from '..'

import { cn } from '@/lib/utils'

import { CircleNotch } from '@phosphor-icons/react/dist/ssr'
import { HTMLAttributes, forwardRef } from 'react'

export interface TableRootProps extends HTMLAttributes<HTMLTableElement> {
  isLoading?: boolean
  isEmpty?: boolean
}

export const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(
  ({ isLoading, isEmpty, children, className, ...rest }, ref) => (
    <div className="relative w-full overflow-auto rounded">
      <table ref={ref} className={cn('w-full caption-bottom text-sm', className)} {...rest}>
        {children}
        {(isEmpty || isLoading) && (
          <TableCaption className="py-8">
            <IconText
              icon={isLoading && <CircleNotch className="animate-spin" />}
              text={isLoading ? 'Loading...' : 'Empty'}
            />
          </TableCaption>
        )}
      </table>
    </div>
  ),
)
TableRoot.displayName = 'TableRoot'
