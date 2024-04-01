'use client'

import { AlertDialog, AlertDialogContentProps, Tooltip } from '@/components'

import { Notification } from '@phosphor-icons/react'
import { FC, useState } from 'react'

export interface DialogInfoProps extends AlertDialogContentProps {}

const DialogInfo: FC<DialogInfoProps> = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <AlertDialog.Trigger>
            <Notification />
          </AlertDialog.Trigger>
        </Tooltip.Trigger>
        <Tooltip.Content>Trigger Dialog</Tooltip.Content>
      </Tooltip.Root>
      <AlertDialog.Content {...rest}>
        <AlertDialog.Header>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will show a{' '}
            <strong>SUCCESS</strong> message on your browser console.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action onClick={() => console.log('Success')}>
            Continue
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

DialogInfo.displayName = 'DialogInfo'

export default DialogInfo
