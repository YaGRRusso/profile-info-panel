'use client'

import { cn } from '@/lib/utils'

import { Command as CommandPrimitive } from 'cmdk'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface CommandItemProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {}

const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, ...rest }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-gray-100 aria-selected:text-gray-900 data-[disabled="true"]:pointer-events-none data-[disabled="true"]:opacity-50 dark:aria-selected:bg-gray-800 dark:aria-selected:text-gray-50',
      className,
    )}
    {...rest}
  />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

export default CommandItem
