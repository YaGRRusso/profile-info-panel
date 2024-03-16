import Link from 'next/link'
import { HTMLAttributes, forwardRef } from 'react'

export interface MessagePageProps extends HTMLAttributes<HTMLDivElement> {
  code: string
  message: string
}

const MessagePage = forwardRef<HTMLDivElement, MessagePageProps>(
  ({ code, message, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black text-white"
        {...rest}
      >
        <div className="flex items-center justify-center gap-4 text-3xl">
          <strong>{code}</strong>
          <div className="h-12 border-x border-white border-opacity-15" />
          <h1>{message}</h1>
        </div>
        <Link className="opacity-50" href="/home">
          Back to Home
        </Link>
      </div>
    )
  },
)
MessagePage.displayName = 'MessagePage'

export default MessagePage
