import { FC, HTMLAttributes } from 'react'

export interface EmphasisProps extends HTMLAttributes<HTMLDivElement> {}

const Emphasis: FC<EmphasisProps> = ({ children, ...rest }) => {
  return (
    <span
      className="transition-all hover:text-sky-500 hover:underline"
      {...rest}
    >
      {children}
    </span>
  )
}

Emphasis.displayName = 'Emphasis'

export default Emphasis
