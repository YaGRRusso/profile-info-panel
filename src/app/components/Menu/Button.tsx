'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnchorHTMLAttributes, FC, ReactNode } from 'react'

export interface MenuButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode
  text: string
  path?: string
}

const MenuButton: FC<MenuButtonProps> = ({ icon, text, path, ...rest }) => {
  const pathname = usePathname()

  return (
    <Link
      className='flex items-center gap-2 rounded-r-lg border-sky-400 px-4 py-2 font-medium transition-all hover:border-l-4 hover:text-sky-400 aria-[current="true"]:border-l-4 aria-[current="true"]:bg-sky-400 aria-[current="true"]:bg-opacity-15 aria-[current="true"]:font-semibold aria-[current="true"]:text-sky-400'
      aria-current={path === pathname}
      href={path ?? '/'}
      {...rest}
    >
      {icon}
      <span>{text}</span>
    </Link>
  )
}

MenuButton.displayName = 'Menu.Button'

export default MenuButton
