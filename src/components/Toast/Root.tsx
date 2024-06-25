'use client'

import { cn } from '@/lib/utils'

import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gray-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-gray-800',
  {
    variants: {
      variant: {
        default: 'border bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50',
        destructive:
          'destructive group border-red-500 bg-red-500 text-gray-50 dark:border-red-900 dark:bg-red-900 dark:text-gray-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface ToastRootProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitives.Root>,
    VariantProps<typeof toastVariants> {}

const ToastRoot = forwardRef<ElementRef<typeof ToastPrimitives.Root>, ToastRootProps>(
  ({ className, variant, ...rest }, ref) => {
    return (
      <ToastPrimitives.Root
        ref={ref}
        className={cn(toastVariants({ variant }), className)}
        {...rest}
      />
    )
  },
)
ToastRoot.displayName = ToastPrimitives.Root.displayName

export type ToastProps = ComponentPropsWithoutRef<typeof ToastRoot>

export default ToastRoot
