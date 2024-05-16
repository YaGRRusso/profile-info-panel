'use client'

import { Button, ButtonProps, Tooltip } from '..'

import { Pencil } from '@phosphor-icons/react'
import { forwardRef } from 'react'

export interface EditButtonProps extends ButtonProps {
  name: string
}

const EditButton = forwardRef<HTMLButtonElement, EditButtonProps>(
  ({ name, ...rest }, ref) => {
    return (
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button ref={ref} variant="outline" size="sm" {...rest}>
            <Pencil />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Edit {name}</Tooltip.Content>
      </Tooltip.Root>
    )
  },
)
EditButton.displayName = 'EditButton'

export default EditButton
