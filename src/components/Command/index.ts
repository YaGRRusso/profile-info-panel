import CommandDialog from './Dialog'
import CommandEmpty from './Empty'
import CommandGroup from './Group'
import CommandInput from './Input'
import CommandItem from './Item'
import CommandList from './List'
import CommandRoot from './Root'
import CommandSeparator from './Separator'
import CommandShortcut from './Shortcut'

export type * from './Dialog'
export type * from './Empty'
export type * from './Group'
export type * from './Input'
export type * from './Item'
export type * from './List'
export type * from './Root'
export type * from './Separator'
export type * from './Shortcut'

const Command = {
  Dialog: CommandDialog,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Input: CommandInput,
  Item: CommandItem,
  List: CommandList,
  Root: CommandRoot,
  Separator: CommandSeparator,
  Shortcut: CommandShortcut,
}

export default Command
