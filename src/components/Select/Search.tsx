'use client'

import { cn } from '@/lib/utils'

import { MagnifyingGlass } from '@phosphor-icons/react'
import { InputHTMLAttributes, forwardRef } from 'react'

export interface SelectSearchProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const SelectSearch = forwardRef<HTMLInputElement, SelectSearchProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div className="flex items-center gap-2 border-b border-gray-200 pl-8 pr-2 focus-within:ring dark:border-gray-800">
        <MagnifyingGlass />
        <input
          className={cn(
            'flex h-10 w-full bg-transparent py-2 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-gray-400',
            className,
          )}
          ref={ref}
          {...rest}
        />
      </div>
    )
  },
)
SelectSearch.displayName = 'SelectSearch'

export default SelectSearch
