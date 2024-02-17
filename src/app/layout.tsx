import Body from './components/Body'
import Menu from './components/Menu'
import { Providers } from './providers'

import {
  Brain,
  House,
  SignOut,
  User,
  Trophy,
  GraduationCap,
  Certificate,
} from '@phosphor-icons/react/dist/ssr'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profile Info',
  description: 'Management of profile infos',
  icons: './favicon.ico',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <Providers>
        <Body.Root className={montserrat.className}>
          <Menu.Root>
            <Menu.Group>
              <Menu.Button icon={<House weight="bold" />} text="Home" path="" />
              <Menu.Button
                icon={<Brain weight="bold" />}
                text="Skills"
                path="/skills"
              />
              <Menu.Button
                icon={<Trophy weight="bold" />}
                text="Projetos"
                path="/projects"
              />
              <Menu.Button
                icon={<GraduationCap weight="bold" />}
                text="Experiências"
                path="/experiences"
              />
              <Menu.Button
                icon={<Certificate weight="bold" />}
                text="Cursos"
                path="/courses"
              />
            </Menu.Group>
            <Menu.Group>
              <Menu.Button
                icon={<User weight="bold" />}
                text="Pessoal"
                path="/personal"
              />
              <Menu.Button
                icon={<SignOut weight="bold" />}
                text="Sair"
                path="/leave"
              />
            </Menu.Group>
          </Menu.Root>
          <Body.Main>{children}</Body.Main>
        </Body.Root>
      </Providers>
    </html>
  )
}
