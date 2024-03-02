import { FC, InputHTMLAttributes } from 'react'

export interface CheckboxInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

const CheckboxInput: FC<CheckboxInputProps> = ({ placeholder, ...rest }) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <input type="checkbox" {...rest} />
      {placeholder && <span>{placeholder}</span>}
    </div>
  )
}

CheckboxInput.displayName = 'CheckboxInput'

export default CheckboxInput
