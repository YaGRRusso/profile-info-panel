'use client'

import { clsx } from 'clsx'
import { FC, InputHTMLAttributes, ReactNode, useCallback, useRef } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

const TextInput: FC<TextInputProps> = ({ icon, className, ...rest }) => {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const focusInput = useCallback(() => {
    const InputComponent = elementRef.current?.querySelector('input')
    InputComponent?.focus()
  }, [elementRef])

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={clsx(
        'flex max-w-full cursor-text items-center gap-4 rounded border border-gray-700 bg-gray-950 px-4 py-2 outline-1 outline-sky-400 transition-all focus-within:outline',
        className,
      )}
      ref={elementRef}
      onClick={focusInput}
    >
      {icon}
      <input
        className="w-full max-w-full bg-transparent text-sm focus:outline-none"
        {...rest}
      />
    </div>
  )
}

TextInput.displayName = 'TextInput'

export default TextInput
