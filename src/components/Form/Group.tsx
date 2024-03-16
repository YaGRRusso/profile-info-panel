import { cn } from '@/lib/utils'

import { HtmlHTMLAttributes, forwardRef } from 'react'

export interface FormGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col gap-2', className)} {...rest}>
        {children}
      </div>
    )
  },
)

FormGroup.displayName = 'FormGroup'

export default FormGroup
