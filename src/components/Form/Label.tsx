import { Label } from '..'

import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label'
import { ElementRef, forwardRef, ComponentPropsWithoutRef } from 'react'

export interface FormLabelProps
  extends ComponentPropsWithoutRef<typeof LabelPrimitiveRoot> {}

const FormLabel = forwardRef<
  ElementRef<typeof LabelPrimitiveRoot>,
  FormLabelProps
>(({ ...props }, ref) => {
  return <Label ref={ref} {...props} />
})

FormLabel.displayName = 'FormLabel'

export default FormLabel
