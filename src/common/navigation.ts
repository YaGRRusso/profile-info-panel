import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const publicRoutes = ['/', '/signin']
export const locales = ['en', 'pt']
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales })
