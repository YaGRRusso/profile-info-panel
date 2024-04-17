'use client'

import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'react'

export interface CommandShortcutProps extends HTMLAttributes<HTMLSpanElement> {}

const CommandShortcut = ({ className, ...rest }: CommandShortcutProps) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-gray-500 dark:text-gray-400',
        className,
      )}
      {...rest}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

export default CommandShortcut
