'use client'

import { Button } from '..'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface AlertDialogActionProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> {}

const AlertDialogAction = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(({ className, ...rest }, ref) => (
  <Button asChild className={className}>
    <AlertDialogPrimitive.Action ref={ref} {...rest} />
  </Button>
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

export default AlertDialogAction
