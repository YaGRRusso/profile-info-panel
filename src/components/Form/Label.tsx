import { Label } from '..'

import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label'
import { ElementRef, forwardRef, ComponentPropsWithoutRef } from 'react'

export interface FormLabelProps
  extends ComponentPropsWithoutRef<typeof LabelPrimitiveRoot> {}

const FormLabel = forwardRef<
  ElementRef<typeof LabelPrimitiveRoot>,
  FormLabelProps
>(({ ...rest }, ref) => {
  return <Label ref={ref} {...rest} />
})

FormLabel.displayName = 'FormLabel'

export default FormLabel
