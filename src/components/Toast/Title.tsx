'use client'

import { cn } from '@/lib/utils'

import * as ToastPrimitives from '@radix-ui/react-toast'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface ToastTitleProps extends ComponentPropsWithoutRef<typeof ToastPrimitives.Title> {}

const ToastTitle = forwardRef<ElementRef<typeof ToastPrimitives.Title>, ToastTitleProps>(
  ({ className, ...rest }, ref) => (
    <ToastPrimitives.Title ref={ref} className={cn('text-sm font-semibold', className)} {...rest} />
  ),
)
ToastTitle.displayName = ToastPrimitives.Title.displayName

export default ToastTitle
