import { cn } from '@/lib/utils'

import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface BadgeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const BadgeButton = forwardRef<HTMLButtonElement, BadgeButtonProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <button
        type="button"
        className={cn('opacity-50 hover:opacity-100', className)}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    )
  },
)
BadgeButton.displayName = 'BadgeButton'

export default BadgeButton
