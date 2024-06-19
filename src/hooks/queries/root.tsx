import { unwrap } from '@/helpers/response'
import { useRoot } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useRootInfo = (
  ...data: Parameters<typeof root.appControllerGetHello>
) => {
  const root = useRoot()

  return useQuery({
    queryKey: ['info'],
    queryFn: async () => await root.appControllerGetHello(...data).then(unwrap),
  })
}
