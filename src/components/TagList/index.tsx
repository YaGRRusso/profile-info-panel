'use client'

import Badge from '../Badge'
import ScrollArea from '../ScrollArea'

import { cn } from '@/lib/utils'
import { CommonSelectValueProps } from '@/types/common-select'

import { X } from '@phosphor-icons/react'
import { HTMLAttributes, forwardRef } from 'react'

export interface TagListProps extends HTMLAttributes<HTMLDivElement> {
  tags?: CommonSelectValueProps[]
  onRemove?: (tag: CommonSelectValueProps) => void
}

const TagList = forwardRef<HTMLDivElement, TagListProps>(
  ({ tags, onRemove, className, children, ...rest }, ref) => {
    return (
      <div
        className={cn(
          'flex flex-col items-stretch rounded-md border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900',
          className,
        )}
        ref={ref}
        {...rest}
      >
        <ScrollArea className="flex max-h-24 max-w-full flex-wrap items-stretch rounded-t-md p-2">
          {tags?.map((tag) => (
            <Badge.Root key={tag.value}>
              {tag?.label ?? tag.value}
              <Badge.Button onClick={() => onRemove?.(tag)}>
                <X />
              </Badge.Button>
            </Badge.Root>
          ))}
        </ScrollArea>
        <div className="rounded-b-md [&>*]:bg-white [&>*]:dark:bg-gray-950">
          {children}
        </div>
      </div>
    )
  },
)
TagList.displayName = 'TagList'

export default TagList
