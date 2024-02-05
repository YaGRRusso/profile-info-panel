import { Logos } from '@/components'

import { CircleNotch } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-12">
      <div className="flex items-center justify-center gap-6 max-md:flex-col">
        <Logos src={['yr-preto.svg', 'yr-branco.svg', 'yr-cor.svg']} />
        <Link href="https://github.com/YaGRRusso" target="_blank">
          <h1 className="flex flex-col gap-2 text-5xl">
            <span>Yago</span>
            <span>Russo</span>
          </h1>
        </Link>
      </div>
      <div className="flex animate-pulse items-center justify-center gap-2 text-center text-slate-300">
        <CircleNotch className="animate-spin" />
        <span>Em desenvolvimento...</span>
      </div>
    </main>
  )
}
