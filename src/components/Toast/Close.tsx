'use client'

import { cn } from '@/lib/utils'

import { X } from '@phosphor-icons/react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface ToastCloseProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitives.Close> {}

const ToastClose = forwardRef<
  ElementRef<typeof ToastPrimitives.Close>,
  ToastCloseProps
>(({ className, ...rest }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-gray-950/50 opacity-0 transition-opacity hover:text-gray-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-gray-50/50 dark:hover:text-gray-50',
      className,
    )}
    toast-close=""
    {...rest}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

export default ToastClose
