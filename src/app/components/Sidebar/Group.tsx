import { FC, HTMLAttributes } from 'react'

export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarGroup: FC<SidebarGroupProps> = ({ children, ...rest }) => {
  return (
    <div className="flex flex-col gap-2" {...rest}>
      {children}
    </div>
  )
}

SidebarGroup.displayName = 'Sidebar.Group'

export default SidebarGroup
