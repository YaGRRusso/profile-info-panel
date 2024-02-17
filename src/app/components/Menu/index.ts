import MenuButton from './Button'
import MenuGroup from './Group'
import MenuRoot from './Root'

export type * from './Button'
export type * from './Group'
export type * from './Root'

const Menu = {
  Button: MenuButton,
  Group: MenuGroup,
  Root: MenuRoot,
}

export default Menu
