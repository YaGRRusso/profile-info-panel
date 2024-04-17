'use client'

import DialogOverlay from './Overlay'
import DialogPortal from './Portal'

import { cn } from '@/lib/utils'

import { X } from '@phosphor-icons/react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface DialogContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {}

const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, ...rest }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid max-h-[90vh] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 overflow-auto border border-gray-200 bg-white p-6 text-gray-900 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 sm:rounded-lg',
        className,
      )}
      {...rest}
    >
      {children}
      <DialogPrimitive.Close className="focus-visible:interactive absolute right-4 top-4 rounded-sm text-gray-500 opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none dark:text-gray-400 dark:data-[state=open]:bg-gray-800">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export default DialogContent
