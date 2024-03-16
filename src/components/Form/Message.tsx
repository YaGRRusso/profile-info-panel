import { cn } from '@/lib/utils'

import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'

const messageVariants = cva('text-xs font-medium', {
  variants: {
    status: {
      error: 'text-red-500 dark:text-red-800',
      warning: 'text-yellow-500 dark:text-yellow-800',
    },
  },
  defaultVariants: {
    status: 'error',
  },
})
export interface FormMessageProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof messageVariants> {}

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ status = 'error', className, children, ...rest }, ref) => {
    return (
      children && (
        <p
          ref={ref}
          className={cn(messageVariants({ status, className }))}
          {...rest}
        >
          {children}
        </p>
      )
    )
  },
)
FormMessage.displayName = 'FormMessage'

export default FormMessage
