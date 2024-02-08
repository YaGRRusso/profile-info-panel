import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

export interface SidebarRootProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarRoot: FC<SidebarRootProps> = ({ children, ...rest }) => {
  return (
    <aside
      className="[&_*]:ellipsis sticky top-0 flex h-screen w-64 flex-col gap-2 border-r border-black bg-[#21262d] p-4 text-slate-50"
      {...rest}
    >
      <div className="mb-4 mt-8 flex items-center justify-center gap-3 border-b border-[#6090e4] border-opacity-25 px-2 pb-6 text-2xl font-semibold">
        <Image src="/yr-branco.svg" alt="logo" width={24} height={24} />
        <span>Yago Russo</span>
      </div>
      <div className="flex flex-1 flex-col items-stretch justify-between gap-4">
        {children}
      </div>
    </aside>
  )
}

SidebarRoot.displayName = 'Sidebar.Root'

export default SidebarRoot
