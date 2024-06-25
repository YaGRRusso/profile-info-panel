import { cn } from '@/lib/utils'

import { DotsThree } from '@phosphor-icons/react/dist/ssr'
import { HTMLAttributes } from 'react'

export interface PaginationEllipsisProps extends HTMLAttributes<HTMLSpanElement> {}

const PaginationEllipsis = ({ className, ...props }: PaginationEllipsisProps) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <DotsThree className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export default PaginationEllipsis
