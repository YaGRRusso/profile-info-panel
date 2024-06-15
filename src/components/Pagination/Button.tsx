import Button, { ButtonProps } from '../Button'

export interface PaginationButtonProps extends ButtonProps {
  isActive?: boolean
}

const PaginationButton = ({
  isActive,
  variant = 'outline',
  size = 'xs',
  ...props
}: PaginationButtonProps) => (
  <Button
    aria-current={isActive ? 'page' : undefined}
    variant={variant}
    size={size}
    {...props}
  />
)
PaginationButton.displayName = 'PaginationButton'

export default PaginationButton
