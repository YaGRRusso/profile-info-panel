'use client'

import { cn } from '@/lib/utils'

import { Check } from '@phosphor-icons/react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  placeholder?: string
}

const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ placeholder, className, ...rest }, ref) => (
  <label className="flex items-center gap-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'focus-visible:interactive h-4 w-4 rounded border bg-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:data-[state=checked]:bg-gray-50 dark:data-[state=checked]:text-gray-900',
        className,
      )}
      {...rest}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check weight="bold" size={12} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {placeholder && <span>{placeholder}</span>}
  </label>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
