import { FC, InputHTMLAttributes } from 'react'

export interface CheckboxInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

const CheckboxInput: FC<CheckboxInputProps> = ({ placeholder, ...rest }) => {
  return (
    <div className="flex w-fit cursor-pointer items-center gap-2 text-sm">
      <input
        className="rounded outline-1 outline-sky-500"
        type="checkbox"
        {...rest}
      />
      {placeholder && <span>{placeholder}</span>}
    </div>
  )
}

CheckboxInput.displayName = 'CheckboxInput'

export default CheckboxInput
