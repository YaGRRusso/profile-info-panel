'use client'

import { useThemeContext } from '@/contexts/theme'
import { cn } from '@/lib/utils'

import { FC, HTMLAttributes } from 'react'

export interface BodyRootProps extends HTMLAttributes<HTMLBodyElement> {}

const BodyRoot: FC<BodyRootProps> = ({ children, className, ...rest }) => {
  const { theme } = useThemeContext()

  return (
    <body
      className={cn(theme, 'flex min-h-screen max-lg:flex-col', className)}
      {...rest}
    >
      {children}
    </body>
  )
}

BodyRoot.displayName = 'Body.Root'

export default BodyRoot
