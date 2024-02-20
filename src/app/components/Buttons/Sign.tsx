'use client'

import Menu, { MenuButtonProps } from '../Menu'

import { useSessionContext } from '@/contexts/session'

import { SignIn, SignOut } from '@phosphor-icons/react'
import { FC } from 'react'

export interface SignButtonProps extends Partial<MenuButtonProps> {}

const SignButton: FC<SignButtonProps> = ({ ...rest }) => {
  const { session, clearSession } = useSessionContext()

  return session ? (
    <Menu.Button
      icon={<SignOut weight="bold" />}
      text="Sair"
      path="/signin"
      onClick={() => clearSession()}
      {...rest}
    />
  ) : (
    <Menu.Button
      icon={<SignIn weight="bold" />}
      text="Entrar"
      path="/signin"
      {...rest}
    />
  )
}

SignButton.displayName = 'SignButton'

export default SignButton
