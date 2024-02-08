import { FC, HTMLAttributes } from 'react'

export interface BodyMainProps extends HTMLAttributes<HTMLDivElement> {}

const BodyMain: FC<BodyMainProps> = ({ children, ...rest }) => {
  return (
    <div
      className="flex-1 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
      {...rest}
    >
      {children}
    </div>
  )
}

BodyMain.displayName = 'Body.Main'

export default BodyMain
