'use client'

import Menu, { MenuButtonProps } from '../Menu'

import { SignIn, SignOut, UserPlus } from '@phosphor-icons/react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { FC, useMemo } from 'react'

export interface SignButtonProps extends Partial<MenuButtonProps> {}

const SignButton: FC<SignButtonProps> = ({ ...rest }) => {
  const { data: session } = useSession()
  const tSidebar = useTranslations('sidebar')

  return useMemo(
    () =>
      session ? (
        <Menu.Button
          icon={<SignOut weight="bold" />}
          text={tSidebar('signOut')}
          onClick={() => signOut()}
          path="/signin"
          {...rest}
        />
      ) : (
        <>
          <Menu.Button
            icon={<UserPlus weight="bold" />}
            text={tSidebar('signUp')}
            path="/signup"
            {...rest}
          />
          <Menu.Button
            icon={<SignIn weight="bold" />}
            text={tSidebar('signIn')}
            onClick={() => signIn()}
            path="/signin"
            {...rest}
          />
        </>
      ),
    [rest, session, tSidebar],
  )
}

SignButton.displayName = 'SignButton'

export default SignButton
