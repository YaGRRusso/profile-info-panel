'use client'

import { cn } from '@/lib/utils'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface DialogDescriptionProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Description> {}

const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...rest }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-gray-500 dark:text-gray-400', className)}
    {...rest}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export default DialogDescription
