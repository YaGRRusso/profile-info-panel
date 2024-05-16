import { useRoot } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useRootInfo = () => {
  const root = useRoot()

  return useQuery({
    queryKey: ['info'],
    queryFn: async () => await root.appControllerGetHello(),
  })
}
