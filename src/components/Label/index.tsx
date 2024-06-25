'use client'

import { cn } from '@/lib/utils'

import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)

export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitiveRoot> &
  VariantProps<typeof labelVariants>

const Label = forwardRef<ElementRef<typeof LabelPrimitiveRoot>, LabelProps>(
  ({ className, ...rest }, ref) => (
    <LabelPrimitiveRoot ref={ref} className={cn(labelVariants(), className)} {...rest} />
  ),
)
Label.displayName = LabelPrimitiveRoot.displayName

export default Label
