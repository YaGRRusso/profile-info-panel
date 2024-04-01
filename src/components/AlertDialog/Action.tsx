'use client'

import { buttonVariants } from '..'

import { cn } from '@/lib/utils'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface AlertDialogActionProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> {}

const AlertDialogAction = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Action>,
  AlertDialogActionProps
>(({ className, ...rest }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...rest}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

export default AlertDialogAction
