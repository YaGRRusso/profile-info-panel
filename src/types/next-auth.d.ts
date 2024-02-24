// eslint-disable-next-line
import NextAuth, { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    token: string
    role: string
  }

  interface Session {
    user: {
      id: string
      email: string
      name: string
      role: string
    }
    token: string
  }
}
