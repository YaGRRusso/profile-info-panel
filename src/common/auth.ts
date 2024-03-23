import { useAuth } from '@/sdk'

import { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const options: AuthOptions = {
  pages: { signIn: '/signin' },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials) {
          // eslint-disable-next-line
          const auth = useAuth()
          const token = await auth.authControllerLogin(credentials)
          const user = await auth.authControllerMe('Bearer ' + token.data)

          if (token && user) return { ...user.data, token: token.data }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { token: userToken, ...userInfos } = user
        token.user = userInfos
        token.token = userToken
      }
      return token
    },
    async session({ session, token }) {
      session = {
        user: token.user,
        expires: token.exp,
        token: token.token,
      } as any
      return session
    },
  },
}

export default options
