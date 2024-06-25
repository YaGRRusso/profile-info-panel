'use client'

import { Command as CommandPrimitive } from 'cmdk'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface CommandEmptyProps
  extends ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {}

const CommandEmpty = forwardRef<ElementRef<typeof CommandPrimitive.Empty>, CommandEmptyProps>(
  (rest, ref) => (
    <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...rest} />
  ),
)
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

export default CommandEmpty
