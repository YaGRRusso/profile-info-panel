'use client'

import Menu, { MenuButtonProps } from '../Menu'

import { SignIn, SignOut } from '@phosphor-icons/react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { FC } from 'react'

export interface SignButtonProps extends Partial<MenuButtonProps> {}

const SignButton: FC<SignButtonProps> = ({ ...rest }) => {
  const { data: session } = useSession()

  return (
    <Menu.Button
      icon={session ? <SignOut weight="bold" /> : <SignIn weight="bold" />}
      text={session ? 'Sair' : 'Entrar'}
      onClick={() => (session ? signOut() : signIn())}
      {...rest}
    />
  )
}

SignButton.displayName = 'SignButton'

export default SignButton
