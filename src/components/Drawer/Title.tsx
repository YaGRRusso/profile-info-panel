'use client'

import { cn } from '@/lib/utils'

import * as DrawerPrimitive from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface DrawerTitleProps extends ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> {}

const DrawerTitle = forwardRef<ElementRef<typeof DrawerPrimitive.Title>, DrawerTitleProps>(
  ({ className, ...rest }, ref) => (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn('text-lg font-semibold text-gray-950 dark:text-gray-50', className)}
      {...rest}
    />
  ),
)
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

export default DrawerTitle
