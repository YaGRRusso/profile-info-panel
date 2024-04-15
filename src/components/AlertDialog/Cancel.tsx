'use client'

import { Button } from '..'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface AlertDialogCancelProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel> {}

const AlertDialogCancel = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Cancel>,
  AlertDialogCancelProps
>(({ className, ...rest }, ref) => (
  <Button asChild className={className} variant="outline">
    <AlertDialogPrimitive.Cancel ref={ref} {...rest} />
  </Button>
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export default AlertDialogCancel
