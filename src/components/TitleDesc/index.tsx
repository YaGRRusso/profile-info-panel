import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export interface TitleDescProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

const TitleDesc = forwardRef<HTMLDivElement, TitleDescProps>(
  ({ title, description, className, ...rest }, ref) => {
    return (
      <div className={cn('mb-4 flex flex-col gap-2', className)} ref={ref} {...rest}>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-gray-800 dark:text-gray-400">{description}</p>
      </div>
    )
  },
)
TitleDesc.displayName = 'TitleDesc'

export default TitleDesc
