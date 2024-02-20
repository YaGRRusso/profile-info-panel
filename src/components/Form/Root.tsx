import { clsx } from 'clsx'
import { FC, FormHTMLAttributes } from 'react'

export interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {}

const FormRoot: FC<FormRootProps> = ({ className, children, ...rest }) => {
  return (
    <form className={clsx('flex w-full flex-col gap-4', className)} {...rest}>
      {children}
    </form>
  )
}

FormRoot.displayName = 'FormRoot'

export default FormRoot
