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
    // eslint-disable-next-line
    <div
      className={clsx(
        'flex max-w-full cursor-text items-center gap-4 rounded border border-gray-800 bg-transparent px-4 py-2 outline-1 outline-sky-500 backdrop-brightness-90 transition-all focus-within:outline',
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
