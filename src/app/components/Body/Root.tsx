'use client'

import { useThemeContext } from '@/contexts/theme'

import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface BodyRootProps extends HTMLAttributes<HTMLBodyElement> {}

const BodyRoot: FC<BodyRootProps> = ({ children, className, ...rest }) => {
  const { theme } = useThemeContext()

  return (
    <body className={clsx(theme, 'flex min-h-screen', className)} {...rest}>
      {children}
    </body>
  )
}

BodyRoot.displayName = 'Body.Root'

export default BodyRoot
