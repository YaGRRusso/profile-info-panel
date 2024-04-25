import PopoverContent from './Content'
import PopoverRoot from './Root'
import PopoverTrigger from './Trigger'

export type * from './Content'
export type * from './Root'
export type * from './Trigger'

const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
}

export default Popover
