import { Warning } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'
import { FC, LabelHTMLAttributes } from 'react'

export interface FormGroupProps extends LabelHTMLAttributes<HTMLLabelElement> {
  title?: string
  error?: string
}

const FormGroup: FC<FormGroupProps> = ({
  title,
  error,
  className,
  children,
  ...rest
}) => {
  return (
    <label className={clsx('flex flex-col gap-2', className)} {...rest}>
      {title && (
        <span className="text-xs font-semibold uppercase text-gray-400">
          {title}
        </span>
      )}
      {children}
      {error && (
        <div className="flex items-center gap-1 text-xs text-red-500">
          <Warning />
          <span>{error}</span>
        </div>
      )}
    </label>
  )
}

FormGroup.displayName = 'FormGroup'

export default FormGroup
