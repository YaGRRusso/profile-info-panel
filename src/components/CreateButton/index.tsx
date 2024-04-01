'use client'

import { Button, ButtonProps, Dialog } from '..'

import { Plus } from '@phosphor-icons/react'
import { forwardRef } from 'react'

export interface CreateButtonProps extends ButtonProps {
  name: string
  isLoading?: boolean
}

const CreateButton = forwardRef<HTMLButtonElement, CreateButtonProps>(
  ({ name, isLoading, ...rest }, ref) => {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button ref={ref} variant="outline" {...rest}>
            <Plus />
            Add {name}
          </Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Add {name}</Dialog.Title>
            <Dialog.Description>
              Fill the form below to add a new {name.toLocaleLowerCase()}
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.Close>
            <Button disabled={isLoading}>Save</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    )
  },
)
CreateButton.displayName = 'CreateButton'

export default CreateButton
