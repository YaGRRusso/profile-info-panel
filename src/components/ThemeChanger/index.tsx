'use client'

import { useThemeContext } from '@/contexts/theme'

import { MoonStars, Sun } from '@phosphor-icons/react'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ThemeChangerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemeChanger = forwardRef<HTMLButtonElement, ThemeChangerProps>(
  ({ ...rest }, ref) => {
    const { theme, toggleTheme } = useThemeContext()

    return (
      <button onClick={() => toggleTheme()} ref={ref} {...rest}>
        {theme === 'light' ? <Sun /> : <MoonStars />}
      </button>
    )
  },
)
ThemeChanger.displayName = 'ThemeChanger'

export default ThemeChanger
