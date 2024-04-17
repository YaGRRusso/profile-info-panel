import { FC, HTMLAttributes } from 'react'

export interface BodyMainProps extends HTMLAttributes<HTMLDivElement> {}

const BodyMain: FC<BodyMainProps> = ({ children, ...rest }) => {
  return (
    <div
      className="flex flex-1 items-center justify-center bg-gray-100 py-20 text-gray-900 dark:bg-gray-950 dark:text-gray-50"
      {...rest}
    >
      <div className="container">{children}</div>
    </div>
  )
}

BodyMain.displayName = 'Body.Main'

export default BodyMain
