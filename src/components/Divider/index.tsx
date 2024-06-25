'use client'

import { cn } from '@/lib/utils'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface DividerProps extends ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {}

const Divider = forwardRef<ElementRef<typeof SeparatorPrimitive.Root>, DividerProps>(
  ({ className, orientation = 'horizontal', decorative = true, ...rest }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-gray-200 dark:bg-gray-800',
        orientation === 'horizontal' && 'h-px w-full',
        orientation === 'vertical' && 'h-full w-px',
        className,
      )}
      {...rest}
    />
  ),
)
Divider.displayName = SeparatorPrimitive.Root.displayName

export default Divider
