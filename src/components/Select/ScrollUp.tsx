'use client'

import { cn } from '@/lib/utils'

import { CaretUp } from '@phosphor-icons/react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface SelectScrollUpButtonProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> {}

const SelectScrollUpButton = forwardRef<
  ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  SelectScrollUpButtonProps
>(({ className, ...rest }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...rest}
  >
    <CaretUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

export default SelectScrollUpButton
