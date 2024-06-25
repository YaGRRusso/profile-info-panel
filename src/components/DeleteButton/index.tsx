'use client'

import { AlertDialog, Button, ButtonProps, Tooltip } from '..'

import { Trash } from '@phosphor-icons/react'
import { forwardRef } from 'react'

export interface DeleteButtonProps extends ButtonProps {
  name: string
  handleConfirm: () => void
}

const DeleteButton = forwardRef<HTMLButtonElement, DeleteButtonProps>(
  ({ name, handleConfirm, ...rest }, ref) => {
    return (
      <AlertDialog.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <AlertDialog.Trigger asChild>
              <Button ref={ref} size="sm" variant="destructive" {...rest}>
                <Trash />
              </Button>
            </AlertDialog.Trigger>
          </Tooltip.Trigger>
          <Tooltip.Content>Delete {name}</Tooltip.Content>
        </Tooltip.Root>
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description>
              This action cannot be undone. This will remove <strong>{name}</strong> from everywhere
              forever.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action onClick={handleConfirm}>Continue</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
    )
  },
)
DeleteButton.displayName = 'DeleteButton'

export default DeleteButton
