import { List } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

export interface SidebarRootProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarRoot: FC<SidebarRootProps> = ({ children, ...rest }) => {
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
        <button className="pointer-events-none text-3xl opacity-15">
          <List />
        </button>
      </header>
    </>
  )
}

SidebarRoot.displayName = 'Sidebar.Root'

export default SidebarRoot
