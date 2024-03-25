'use client'

import { cn } from '@/lib/utils'

import * as ToastPrimitives from '@radix-ui/react-toast'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface ToastViewportProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> {}

const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ToastViewportProps
>(({ className, ...rest }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...rest}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

export default ToastViewport
