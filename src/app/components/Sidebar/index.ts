import SidebarButton from './Button'
import SidebarGroup from './Group'
import SidebarRoot from './Root'

export type * from './Button'
export type * from './Group'
export type * from './Root'

const Sidebar = {
  Button: SidebarButton,
  Group: SidebarGroup,
  Root: SidebarRoot,
}

export default Sidebar
