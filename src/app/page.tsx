import Buttons from './components/Buttons'

import { Logos } from '@/components'

import { CircleNotch } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-16">
      <Buttons />
      <div className="flex items-center justify-center gap-6 max-md:flex-col">
        <Logos src={['yr-preto.svg', 'yr-branco.svg', 'yr-cor.svg']} />
        <h1 className="flex flex-col gap-2 text-7xl">
          <span>Yago</span>
          <span>Russo</span>
        </h1>
      </div>
      <div className="flex animate-pulse items-center justify-center gap-4 text-center dark:text-slate-300">
        <CircleNotch className="animate-spin" />
        <span>Em desenvolvimento...</span>
      </div>
    </main>
  )
}
