'use client'

import { cn } from '@/lib/utils'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface AlertDialogTitleProps
  extends ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> {}

const AlertDialogTitle = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitleProps
>(({ className, ...rest }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn(
      'py-6 text-lg font-semibold text-gray-900 dark:text-gray-50',
      className,
    )}
    {...rest}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

export default AlertDialogTitle
