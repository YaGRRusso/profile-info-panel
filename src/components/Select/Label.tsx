'use client'

import { cn } from '@/lib/utils'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface SelectLabelProps extends ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {}

const SelectLabel = forwardRef<ElementRef<typeof SelectPrimitive.Label>, SelectLabelProps>(
  ({ className, ...rest }, ref) => (
    <SelectPrimitive.Label
      ref={ref}
      className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
      {...rest}
    />
  ),
)
SelectLabel.displayName = SelectPrimitive.Label.displayName

export default SelectLabel
