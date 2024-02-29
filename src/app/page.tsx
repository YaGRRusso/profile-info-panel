import options from '@/common/auth'

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export default async function Index() {
  const session = await getServerSession(options)
  session ? redirect('/home') : redirect('/signin')
}
