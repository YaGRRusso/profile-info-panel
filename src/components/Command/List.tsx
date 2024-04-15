'use client'

import ScrollArea from '../ScrollArea'

import { cn } from '@/lib/utils'

import { Command as CommandPrimitive } from 'cmdk'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface CommandListProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.List> {}

const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  CommandListProps
>(({ className, children, ...rest }, ref) => (
  <CommandPrimitive.List ref={ref} {...rest}>
    <ScrollArea className={cn('flex max-h-64 flex-col', className)}>
      {children}
    </ScrollArea>
  </CommandPrimitive.List>
))
CommandList.displayName = CommandPrimitive.List.displayName

export default CommandList
