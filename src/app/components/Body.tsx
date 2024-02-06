'use client'

import { useThemeContext } from '@/contexts/theme'

import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface BodyProps extends HTMLAttributes<HTMLBodyElement> {}

const Body: FC<BodyProps> = ({ children, className, ...rest }) => {
  const { theme } = useThemeContext()

  return (
    <body className={clsx(theme, className)} {...rest}>
      {children}
    </body>
  )
}

Body.displayName = 'Body'

export default Body
