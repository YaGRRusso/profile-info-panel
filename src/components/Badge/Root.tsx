import { cn } from '@/lib/utils'

import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'

export const badgeRootVariants = cva(
  'focus:interactive inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none dark:border-gray-800',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-gray-900 text-gray-50  dark:bg-gray-50 dark:text-gray-900',
        secondary:
          'border-transparent bg-gray-100 text-gray-900  dark:bg-gray-800 dark:text-gray-50',
        destructive: 'border-transparent bg-red-500 text-gray-50 dark:bg-red-900 dark:text-gray-50',
        outline: 'text-gray-950 dark:text-gray-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeRootProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeRootVariants> {}

const BadgeRoot = forwardRef<HTMLDivElement, BadgeRootProps>(
  ({ className, variant, ...rest }, ref) => {
    return <div ref={ref} className={cn(badgeRootVariants({ variant }), className)} {...rest} />
  },
)
BadgeRoot.displayName = 'BadgeRoot'

export default BadgeRoot
