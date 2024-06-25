'use client'

import { cn } from '@/lib/utils'

import { Command as CommandPrimitive } from 'cmdk'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface CommandRootProps extends ComponentPropsWithoutRef<typeof CommandPrimitive> {}

const CommandRoot = forwardRef<ElementRef<typeof CommandPrimitive>, CommandRootProps>(
  ({ className, ...rest }, ref) => (
    <CommandPrimitive
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col gap-2 overflow-hidden rounded-md bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50',
        className,
      )}
      {...rest}
    />
  ),
)
CommandRoot.displayName = CommandPrimitive.displayName

export default CommandRoot
