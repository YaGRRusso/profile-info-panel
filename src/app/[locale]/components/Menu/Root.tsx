'use client'

import { usePathname } from '@/common/navigation'

import { X } from '@phosphor-icons/react'
import { List } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { FC, HTMLAttributes, useEffect, useState } from 'react'

export interface MenuRootProps extends HTMLAttributes<HTMLDivElement> {}

const MenuRoot: FC<MenuRootProps> = ({ children, ...rest }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsExpanded(false)
  }, [pathname])

  return (
    <>
      <aside
        className="[&_*]:ellipsis sticky top-0 flex h-screen w-64 flex-col gap-2 border-r border-gray-900 bg-gray-900 p-4 text-gray-50 dark:bg-gray-950 max-lg:hidden"
        {...rest}
      >
        <div className="my-4 flex items-center justify-center gap-2 border-b border-gray-800 px-2 pb-6 text-3xl font-medium dark:border-gray-900">
          <Image src="/yr-branco.svg" alt="logo" width={24} height={24} />
          <span>
            <strong className="font-semibold text-sky-500">Yago</strong>Russo
          </span>
        </div>
        <div className="flex flex-1 flex-col items-stretch justify-between gap-4">
          {children}
        </div>
      </aside>

      <header
        className="[&_*]:ellipsis hidden w-full justify-between gap-2 bg-gray-900 p-4 text-gray-50 dark:bg-gray-950 max-lg:flex"
        {...rest}
      >
        <div className="m-4 flex items-center justify-center gap-2 text-3xl font-medium">
          <Image src="/yr-branco.svg" alt="logo" width={24} height={24} />
          <span>
            <strong className="font-semibold text-sky-500">Yago</strong>Russo
          </span>
        </div>
        <button className="text-3xl" onClick={() => setIsExpanded(true)}>
          <List />
        </button>
      </header>

      <div
        className="fixed inset-0 z-30 hidden translate-x-full flex-col bg-gray-900 text-gray-50 transition-all aria-[expanded='true']:translate-x-0 dark:bg-gray-950 max-lg:flex"
        aria-expanded={isExpanded}
      >
        <div
          className="[&_*]:ellipsis flex w-full justify-between gap-2 border-b border-gray-800 p-4 dark:border-gray-900"
          {...rest}
        >
          <div className="m-4 flex items-center justify-center gap-2 text-3xl font-medium">
            <Image src="/yr-branco.svg" alt="logo" width={24} height={24} />
            <span>
              <strong className="font-semibold text-sky-500">Yago</strong>Russo
            </span>
          </div>
          <button className="text-3xl" onClick={() => setIsExpanded(false)}>
            <X />
          </button>
        </div>
        <div className="flex flex-1 flex-col items-stretch justify-between gap-4 p-4">
          {children}
        </div>
      </div>
    </>
  )
}

MenuRoot.displayName = 'Menu.Root'

export default MenuRoot
