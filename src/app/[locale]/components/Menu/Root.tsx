'use client'

import { X } from '@phosphor-icons/react'
import { List } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { FC, HTMLAttributes, useState } from 'react'

export interface MenuRootProps extends HTMLAttributes<HTMLDivElement> {}

const MenuRoot: FC<MenuRootProps> = ({ children, ...rest }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <aside
        className="[&_*]:ellipsis sticky top-0 flex h-screen w-64 flex-col gap-2 border-r border-black bg-gray-900 p-4 text-gray-50 max-lg:hidden"
        {...rest}
      >
        <div className="mb-4 mt-8 flex items-center justify-center gap-2 border-b border-sky-400 border-opacity-15 px-2 pb-6 text-3xl font-medium">
          <Image src="/yr-branco.svg" alt="logo" width={24} height={24} />
          <span>
            <strong className="font-semibold text-sky-400">Yago</strong>Russo
          </span>
        </div>
        <div className="flex flex-1 flex-col items-stretch justify-between gap-4">
          {children}
        </div>
      </aside>

      <header
        className="[&_*]:ellipsis hidden w-full justify-between gap-2 bg-gray-900 p-4 text-gray-50 max-lg:flex"
        {...rest}
      >
        <div className="m-4 flex items-center justify-center gap-2 text-3xl font-medium">
          <Image src="/yr-branco.svg" alt="logo" width={24} height={24} />
          <span>
            <strong className="font-semibold text-sky-400">Yago</strong>Russo
          </span>
        </div>
        <button className="text-3xl" onClick={() => setIsExpanded(true)}>
          <List />
        </button>
      </header>

      <div
        className="fixed inset-0 z-30 hidden translate-x-full flex-col bg-gray-900 text-gray-50 transition-all aria-[expanded='true']:translate-x-0 max-lg:flex"
        aria-expanded={isExpanded}
      >
        <div
          className="[&_*]:ellipsis flex w-full justify-between gap-2 border-b border-sky-400 border-opacity-15 p-4"
          {...rest}
        >
          <div className="m-4 flex items-center justify-center gap-2 text-3xl font-medium">
            <Image src="/yr-branco.svg" alt="logo" width={24} height={24} />
            <span>
              <strong className="font-semibold text-sky-400">Yago</strong>Russo
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