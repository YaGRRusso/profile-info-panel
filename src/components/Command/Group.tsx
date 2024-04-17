'use client'

import { cn } from '@/lib/utils'

import { Command as CommandPrimitive } from 'cmdk'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface CommandGroupProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {}

const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  CommandGroupProps
>(({ className, ...rest }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-gray-950 dark:text-gray-50 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500 dark:[&_[cmdk-group-heading]]:text-gray-400',
      className,
    )}
    {...rest}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

export default CommandGroup
