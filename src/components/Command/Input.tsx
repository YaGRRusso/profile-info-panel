'use client'

import { cn } from '@/lib/utils'

import { MagnifyingGlass } from '@phosphor-icons/react'
import { Command as CommandPrimitive } from 'cmdk'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface CommandInputProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {}

const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, ...rest }, ref) => (
  <div
    // eslint-disable-next-line react/no-unknown-property
    cmdk-input-wrapper=""
    className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800"
  >
    <MagnifyingGlass />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-10 w-full bg-transparent py-2 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-gray-400',
        className,
      )}
      {...rest}
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

export default CommandInput
