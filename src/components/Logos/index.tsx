import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

export interface LogosProps extends HTMLAttributes<HTMLDivElement> {}

const Logos: FC<LogosProps> = ({ ...rest }) => {
  return (
    <div
      className="flex items-center justify-center [&_*:hover]:scale-105 [&_*]:transition-all"
      {...rest}
    >
      <Image
        src="yr-branco.svg"
        alt="logo one"
        width={120}
        height={120}
        className="-mr-8 hidden dark:block"
      />
      <Image
        src="yr-preto.svg"
        alt="logo two"
        width={120}
        height={120}
        className="-mr-8 block dark:hidden"
      />
      <Image
        src="yr-cor.svg"
        alt="logo three"
        width={120}
        height={120}
        className="-ml-8 block"
      />
    </div>
  )
}

Logos.displayName = 'Logos'

export default Logos
