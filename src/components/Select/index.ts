import SelectContent from './Content'
import SelectGroup from './Group'
import SelectItem from './Item'
import SelectLabel from './Label'
import SelectRoot from './Root'
import SelectScrollDown from './ScrollDown'
import SelectScrollUp from './ScrollUp'
import SelectSearch from './Search'
import SelectSeparator from './Separator'
import SelectTrigger from './Trigger'
import SelectValue from './Value'

export type * from './Content'
export type * from './Group'
export type * from './Item'
export type * from './Label'
export type * from './Root'
export type * from './ScrollDown'
export type * from './ScrollUp'
export type * from './Search'
export type * from './Separator'
export type * from './Trigger'
export type * from './Value'

const Select = {
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Label: SelectLabel,
  Root: SelectRoot,
  ScrollDown: SelectScrollDown,
  ScrollUp: SelectScrollUp,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Search: SelectSearch,
}

export default Select
