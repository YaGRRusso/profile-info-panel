import DialogClose from './Close'
import DialogContent from './Content'
import DialogDescription from './Description'
import DialogFooter from './Footer'
import DialogHeader from './Header'
import DialogOverlay from './Overlay'
import DialogPortal from './Portal'
import DialogRoot from './Root'
import DialogTitle from './Title'
import DialogTrigger from './Trigger'

export type * from './Content'
export type * from './Description'
export type * from './Footer'
export type * from './Header'
export type * from './Overlay'
export type * from './Title'

const Dialog = {
  Close: DialogClose,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Overlay: DialogOverlay,
  Portal: DialogPortal,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
}

export default Dialog
