import { clsx } from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 rounded bg-sky-600 px-4 py-2 font-medium text-gray-50 outline-1 outline-sky-500 transition-all hover:bg-sky-500 active:outline',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
