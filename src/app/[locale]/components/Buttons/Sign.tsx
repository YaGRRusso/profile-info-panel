'use client'

import Menu, { MenuButtonProps } from '../Menu'

import { SignOut } from '@phosphor-icons/react'
import { signOut } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

export interface SignButtonProps extends Partial<MenuButtonProps> {}

const SignButton: FC<SignButtonProps> = ({ ...rest }) => {
  const tSidebar = useTranslations('sidebar')

  return (
    <Menu.Button
      icon={<SignOut weight="bold" />}
      text={tSidebar('signOut')}
      onClick={() => signOut()}
      path="/signin"
      {...rest}
    />
  )
}

SignButton.displayName = 'SignButton'

export default SignButton
