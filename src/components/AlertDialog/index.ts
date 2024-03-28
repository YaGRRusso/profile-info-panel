import AlertDialogAction from './Action'
import AlertDialogCancel from './Cancel'
import AlertDialogContent from './Content'
import AlertDialogDescription from './Description'
import AlertDialogFooter from './Footer'
import AlertDialogHeader from './Header'
import AlertDialogOverlay from './Overlay'
import AlertDialogPortal from './Portal'
import AlertDialogRoot from './Root'
import AlertDialogTitle from './Title'
import AlertDialogTrigger from './Trigger'

export type * from './Action'
export type * from './Cancel'
export type * from './Content'
export type * from './Description'
export type * from './Footer'
export type * from './Header'
export type * from './Overlay'

const AlertDialog = {
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Overlay: AlertDialogOverlay,
  Portal: AlertDialogPortal,
  Root: AlertDialogRoot,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
}

export default AlertDialog
