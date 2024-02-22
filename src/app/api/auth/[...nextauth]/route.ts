import auth from '@/services/auth'

import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const authOptions: AuthOptions = {
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
          if (token) return await auth.getMe(token)
        }
        return null
      },
    }),
  ],
  pages: { signIn: '/signin' },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user as any
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
