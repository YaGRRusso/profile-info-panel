'use client'

import { cn } from '@/lib/utils'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface DialogTitleProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Title> {}

const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...rest }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...rest}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

export default DialogTitle
