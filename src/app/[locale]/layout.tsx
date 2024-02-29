import Body from './components/Body'
import SignButton from './components/Buttons/Sign'
import Menu from './components/Menu'
import { Providers } from './providers'

import {
  Brain,
  House,
  User,
  Trophy,
  GraduationCap,
  Certificate,
} from '@phosphor-icons/react/dist/ssr'
import { Montserrat } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { ReactNode } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages()
  const tSidebar = await getTranslations('sidebar')

  return (
    <html lang={params.locale}>
      <Providers>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Body.Root className={montserrat.className}>
            <Menu.Root>
              <Menu.Group>
                <Menu.Button
                  icon={<House weight="bold" />}
                  text={tSidebar('home')}
                  path="/home"
                />
                <Menu.Button
                  icon={<Brain weight="bold" />}
                  text={tSidebar('skills')}
                  path="/skills"
                />
                <Menu.Button
                  icon={<Trophy weight="bold" />}
                  text={tSidebar('projects')}
                  path="/projects"
                />
                <Menu.Button
                  icon={<GraduationCap weight="bold" />}
                  text={tSidebar('experiences')}
                  path="/experiences"
                />
                <Menu.Button
                  icon={<Certificate weight="bold" />}
                  text={tSidebar('courses')}
                  path="/courses"
                />
              </Menu.Group>
              <Menu.Group>
                <Menu.Button
                  icon={<User weight="bold" />}
                  text={tSidebar('profile')}
                  path="/personal"
                />
                <SignButton />
              </Menu.Group>
            </Menu.Root>
            <Body.Main>{children}</Body.Main>
          </Body.Root>
        </NextIntlClientProvider>
      </Providers>
    </html>
  )
}
