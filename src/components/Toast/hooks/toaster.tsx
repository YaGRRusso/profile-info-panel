'use client'

import { useToast } from './useToast'

import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from '..'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...rest }) {
        return (
          <ToastRoot key={id} {...rest}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </ToastRoot>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
