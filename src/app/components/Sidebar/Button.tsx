import { clsx } from 'clsx'
import { headers } from 'next/headers'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

export interface SidebarButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  text: string
  path: string
}

const SidebarButton: FC<SidebarButtonProps> = ({
  icon,
  text,
  path,
  className,
  ...rest
}) => {
  const pathname = headers().get('next-url')

  return (
    <button
      className={clsx(
        'flex items-center gap-2 rounded-r-lg px-4 py-2 font-medium transition-all hover:text-[#6090e4]',
        path === pathname &&
          'border-l-4 border-[#6090e4] bg-[#25324a] font-semibold text-[#6090e4]',
        className,
      )}
      {...rest}
    >
      {icon}
      <span>{text}</span>
    </button>
  )
}

SidebarButton.displayName = 'Sidebar.Button'

export default SidebarButton
