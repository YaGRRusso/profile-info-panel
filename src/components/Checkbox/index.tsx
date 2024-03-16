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
>(({ placeholder, className, ...props }, ref) => (
  <div className="flex items-center gap-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'h-4 w-4 shrink-0 rounded-sm border ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50 dark:border-gray-900 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 dark:data-[state=checked]:bg-sky-400 dark:data-[state=checked]:text-gray-900',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {placeholder && <span>{placeholder}</span>}
  </div>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
