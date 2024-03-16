import { cn } from '@/lib/utils'

import { HTMLAttributes, forwardRef } from 'react'

export interface FormMessageProps
  extends HTMLAttributes<HTMLParagraphElement> {}

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-sm font-medium text-red-500 dark:text-red-900',
          className,
        )}
        {...props}
      >
        {children}
      </p>
    )
  },
)
FormMessage.displayName = 'FormMessage'

export default FormMessage
