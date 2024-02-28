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
import { ReactNode } from 'react'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={params.locale}>
      <Providers>
        <Body.Root className={montserrat.className}>
          <Menu.Root>
            <Menu.Group>
              <Menu.Button
                icon={<House weight="bold" />}
                text="Home"
                path="/"
              />
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
              <SignButton />
            </Menu.Group>
          </Menu.Root>
          <Body.Main>{children}</Body.Main>
        </Body.Root>
      </Providers>
    </html>
  )
}
