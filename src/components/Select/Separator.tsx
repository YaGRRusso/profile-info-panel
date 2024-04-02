'use client'

import { cn } from '@/lib/utils'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface SelectSeparatorProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> {}

const SelectSeparator = forwardRef<
  ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, ...rest }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-gray-100 dark:bg-gray-800', className)}
    {...rest}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export default SelectSeparator
