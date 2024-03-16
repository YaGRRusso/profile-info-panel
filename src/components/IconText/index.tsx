import { cn } from '@/lib/utils'

import { HTMLAttributes, ReactNode, forwardRef } from 'react'

export interface IconTextProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
  text: string
}

const IconText = forwardRef<HTMLDivElement, IconTextProps>(
  ({ icon, text, className, ...rest }, ref) => {
    return (
      <div
        className={cn('flex items-center justify-center gap-2', className)}
        ref={ref}
        {...rest}
      >
        {icon}
        {text}
      </div>
    )
  },
)
IconText.displayName = 'IconText'

export default IconText
