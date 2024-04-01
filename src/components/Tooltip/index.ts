import TooltipContent from './Content'
import TooltipProvider from './Provider'
import TooltipRoot from './Root'
import TooltipTrigger from './Trigger'

export type * from './Content'

const Tooltip = {
  Content: TooltipContent,
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
}

export default Tooltip
