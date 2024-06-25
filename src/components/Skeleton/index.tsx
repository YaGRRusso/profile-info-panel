import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  repeat?: number
}

const Skeleton = ({ repeat = 1, className, ...rest }: SkeletonProps) =>
  [...Array(repeat)].map((item, index) => (
    <div
      key={index}
      className={cn('animate-pulse rounded-md bg-gray-100 dark:bg-gray-800', className)}
      {...rest}
    />
  ))

Skeleton.displayName = 'Skeleton.'

export default Skeleton
