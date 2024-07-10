import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'react'

export interface PaginationRootProps extends HTMLAttributes<HTMLDivElement> {}

const PaginationRoot = ({ className, ...props }: PaginationRootProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)
PaginationRoot.displayName = 'Pagination'

export default PaginationRoot
