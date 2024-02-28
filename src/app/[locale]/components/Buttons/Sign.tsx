'use client'

import Menu, { MenuButtonProps } from '../Menu'

import { SignIn, SignOut } from '@phosphor-icons/react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

export interface SignButtonProps extends Partial<MenuButtonProps> {}

const SignButton: FC<SignButtonProps> = ({ ...rest }) => {
  const { data: session } = useSession()
  const tSidebar = useTranslations('sidebar')

  return (
    <Menu.Button
      icon={session ? <SignOut weight="bold" /> : <SignIn weight="bold" />}
      text={session ? tSidebar('signOut') : tSidebar('signIn')}
      onClick={() => (session ? signOut() : signIn())}
      {...rest}
    />
  )
}

SignButton.displayName = 'SignButton'

export default SignButton
