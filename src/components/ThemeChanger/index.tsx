'use client'

import { useThemeContext } from '@/contexts/theme'

import { MoonStars, Sun } from '@phosphor-icons/react'
import { ButtonHTMLAttributes, FC } from 'react'

export interface ThemeChangerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemeChanger: FC<ThemeChangerProps> = ({ ...rest }) => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <button onClick={() => toggleTheme()} {...rest}>
      {theme === 'light' ? <Sun /> : <MoonStars />}
    </button>
  )
}

ThemeChanger.displayName = 'ThemeChanger'

export default ThemeChanger
