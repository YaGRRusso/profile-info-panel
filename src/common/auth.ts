import auth from '@/services/auth'

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
          const token = await auth.postLogin(credentials)
          const user = await auth.getMe(token)
          if (token && user) return { ...user, token }
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
