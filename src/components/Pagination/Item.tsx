import { HTMLAttributes, forwardRef } from 'react'

export interface PaginationProps extends HTMLAttributes<HTMLLIElement> {}

const PaginationItem = forwardRef<HTMLLIElement, PaginationProps>(({ ...props }, ref) => (
  <li ref={ref} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

export default PaginationItem
