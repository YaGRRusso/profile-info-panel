'use client'

import { cn } from '@/lib/utils'

import * as ToastPrimitives from '@radix-ui/react-toast'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactElement,
  forwardRef,
} from 'react'

export interface ToastActionProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitives.Action> {}

const ToastAction = forwardRef<
  ElementRef<typeof ToastPrimitives.Action>,
  ToastActionProps
>(({ className, ...rest }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'focus-visible:interactive inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-gray-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-gray-50 dark:border-gray-800 dark:hover:bg-gray-800 dark:group-[.destructive]:border-gray-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-gray-50',
      className,
    )}
    {...rest}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

export type ToastActionElement = ReactElement<typeof ToastAction>

export default ToastAction
