import { FC, HTMLAttributes } from 'react'

export interface BodyMainProps extends HTMLAttributes<HTMLDivElement> {}

const BodyMain: FC<BodyMainProps> = ({ children, ...rest }) => {
  return (
    <div
      className="flex-1 bg-slate-100 text-slate-900 dark:bg-[#343940] dark:text-slate-50"
      {...rest}
    >
      {children}
    </div>
  )
}

BodyMain.displayName = 'Body.Main'

export default BodyMain
