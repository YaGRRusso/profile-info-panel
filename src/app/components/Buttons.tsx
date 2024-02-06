'use client'

import { useThemeContext } from '@/contexts/theme'

import { GithubLogo, MoonStars, Sun, Translate } from '@phosphor-icons/react'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

export interface ButtonsProps extends HTMLAttributes<HTMLDivElement> {}

const Buttons: FC<ButtonsProps> = ({ ...rest }) => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <div
      className="flex items-center justify-center gap-4 text-xl text-slate-800 dark:text-slate-400 [&_*:disabled]:opacity-50"
      {...rest}
    >
      <button onClick={() => toggleTheme()}>
        {theme === 'light' ? <Sun /> : <MoonStars />}
      </button>
      <Link href="https://github.com/YaGRRusso" target="_blank">
        <GithubLogo />
      </Link>
      <button disabled>
        <Translate />
      </button>
    </div>
  )
}

Buttons.displayName = 'Buttons'

export default Buttons
