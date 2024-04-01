'use client'

import { cn } from '@/lib/utils'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface AlertDialogOverlayProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> {}

const AlertDialogOverlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Overlay>,
  AlertDialogOverlayProps
>(({ className, ...rest }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...rest}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

export default AlertDialogOverlay
