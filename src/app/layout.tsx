import Body from './components/Body'
import Sidebar from './components/Sidebar'
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
          <Sidebar.Root>
            <Sidebar.Group>
              <Sidebar.Button
                icon={<House weight="bold" />}
                text="Home"
                path="/"
              />
              <Sidebar.Button
                icon={<Brain weight="bold" />}
                text="Skills"
                path="/skills"
              />
              <Sidebar.Button
                icon={<Trophy weight="bold" />}
                text="Projetos"
                path="/projects"
              />
              <Sidebar.Button
                icon={<GraduationCap weight="bold" />}
                text="Experiências"
                path="/experiences"
              />
              <Sidebar.Button
                icon={<Certificate weight="bold" />}
                text="Cursos"
                path="/courses"
              />
            </Sidebar.Group>
            <Sidebar.Group>
              <Sidebar.Button
                icon={<User weight="bold" />}
                text="Pessoal"
                path="/personal"
              />
              <Sidebar.Button
                icon={<SignOut weight="bold" />}
                text="Sair"
                path="/leave"
              />
            </Sidebar.Group>
          </Sidebar.Root>
          <Body.Main>{children}</Body.Main>
        </Body.Root>
      </Providers>
    </html>
  )
}
