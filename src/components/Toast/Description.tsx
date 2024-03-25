'use client'

import { cn } from '@/lib/utils'

import * as ToastPrimitives from '@radix-ui/react-toast'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface ToastDescriptionProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitives.Description> {}

const ToastDescription = forwardRef<
  ElementRef<typeof ToastPrimitives.Description>,
  ToastDescriptionProps
>(({ className, ...rest }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...rest}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

export default ToastDescription
