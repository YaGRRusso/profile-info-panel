import { Dialog } from '..'

import { DialogProps } from '@radix-ui/react-dialog'
import { ReactNode, forwardRef } from 'react'

export interface FloatingFormProps extends DialogProps {
  title: ReactNode
  description: ReactNode
}

const FloatingForm = forwardRef<HTMLDivElement, FloatingFormProps>(
  ({ title, description, children, ...rest }, ref) => {
    return (
      <Dialog.Root {...rest}>
        <Dialog.Content ref={ref}>
          <Dialog.Header>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Description>{description}</Dialog.Description>
          </Dialog.Header>
          {children}
        </Dialog.Content>
      </Dialog.Root>
    )
  },
)
FloatingForm.displayName = 'FloatingForm'

export default FloatingForm
