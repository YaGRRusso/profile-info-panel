'use client'

import { cn } from '@/lib/utils'

import { Command as CommandPrimitive } from 'cmdk'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface CommandSeparatorProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> {}

const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, ...rest }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-gray-200 dark:bg-gray-800', className)}
    {...rest}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

export default CommandSeparator
