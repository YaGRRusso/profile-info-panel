import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'

export interface LogosProps extends HTMLAttributes<HTMLDivElement> {
  src: string[]
}

const Logos: FC<LogosProps> = ({ src, ...rest }) => {
  return (
    <div
      className="flex items-center justify-center [&_*:hover]:scale-105 [&_*]:transition-all"
      {...rest}
    >
      <Image
        src={src[0]}
        alt="logo one"
        width={120}
        height={120}
        className="-mr-16 "
      />
      <Image src={src[1]} alt="logo two" width={120} height={120} />
      <Image
        src={src[2]}
        alt="logo three"
        width={120}
        height={120}
        className="-ml-16 "
      />
    </div>
  )
}

Logos.displayName = 'Logos'

export default Logos
