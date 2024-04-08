import PopoverContent from './Content'
import PopoverRoot from './Root'
import PopoverTrigger from './Trigger'

export type * from './Content'

const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
}

export default Popover
