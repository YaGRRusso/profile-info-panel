import { cn } from '@/lib/utils'

import { FormHTMLAttributes, forwardRef } from 'react'

export interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {}

const FormRoot = forwardRef<HTMLFormElement, FormRootProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <form ref={ref} className={cn('flex w-full flex-col gap-4', className)} {...rest}>
        {children}
      </form>
    )
  },
)
FormRoot.displayName = 'FormRoot'

export default FormRoot
