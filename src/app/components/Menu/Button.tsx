import { clsx } from 'clsx'
import { headers } from 'next/headers'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

export interface MenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  text: string
  path: string
}

const MenuButton: FC<MenuButtonProps> = ({
  icon,
  text,
  path,
  className,
  ...rest
}) => {
  const pathname = headers().get('next-url') ?? ''

  return (
    <button
      className={clsx(
        'flex items-center gap-2 rounded-r-lg border-sky-400 px-4 py-2 font-medium transition-all hover:border-l-4 hover:text-sky-400',
        path === pathname?.replace(/\/$/, '') &&
          'border-l-4 bg-sky-400 bg-opacity-15 font-semibold text-sky-400',
        className,
      )}
      {...rest}
    >
      {icon}
      <span>{text}</span>
    </button>
  )
}

MenuButton.displayName = 'Menu.Button'

export default MenuButton
