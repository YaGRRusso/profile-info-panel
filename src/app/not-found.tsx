'use client'

import { MessagePage } from '@/components'

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <MessagePage code="404" message="Not Found" />
      </body>
    </html>
  )
}
