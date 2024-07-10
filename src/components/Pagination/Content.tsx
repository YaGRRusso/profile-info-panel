import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export interface PaginationContentProps extends HTMLAttributes<HTMLUListElement> {}

const PaginationContent = forwardRef<HTMLUListElement, PaginationContentProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        'flex flex-row items-center gap-1 text-sm text-gray-500 dark:text-gray-400',
        className,
      )}
      {...props}
    />
  ),
)
PaginationContent.displayName = 'PaginationContent'

export default PaginationContent
