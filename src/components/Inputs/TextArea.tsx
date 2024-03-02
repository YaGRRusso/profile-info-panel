import { clsx } from 'clsx'
import {
  FC,
  ReactNode,
  TextareaHTMLAttributes,
  useCallback,
  useRef,
} from 'react'

export interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactNode
}

const TextAreaInput: FC<TextAreaInputProps> = ({
  icon,
  className,
  ...rest
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const focusInput = useCallback(() => {
    const InputComponent = elementRef.current?.querySelector('input')
    InputComponent?.focus()
  }, [elementRef])

  return (
    // eslint-disable-next-line
    <div
      className={clsx(
        'flex max-w-full cursor-text gap-4 rounded border border-gray-700 bg-gray-950 px-4 py-2 outline-1 outline-sky-400 transition-all focus-within:outline',
        className,
      )}
      ref={elementRef}
      onClick={focusInput}
    >
      {icon}
      <textarea
        className="max-h-32 min-h-16 w-full max-w-full bg-transparent text-sm focus:outline-none"
        {...rest}
      />
    </div>
  )
}

TextAreaInput.displayName = 'TextAreaInput'

export default TextAreaInput
