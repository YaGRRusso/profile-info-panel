import TooltipContent from './Content'
import TooltipProvider from './Provider'
import TooltipRoot from './Root'
import TooltipTrigger from './Trigger'

export type * from './Content'
export type * from './Provider'
export type * from './Root'
export type * from './Trigger'

const Tooltip = {
  Content: TooltipContent,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
}

export default Tooltip
