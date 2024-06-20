import { unwrap } from '@/helpers/response'
import { useRoot } from '@/sdk'
import { QueryDataProps } from '@/types/query-data'

import { useQuery } from '@tanstack/react-query'

export const useRootInfo = (
  ...data: QueryDataProps<typeof root.appControllerGetHello>
) => {
  const root = useRoot()

  return useQuery({
    queryKey: ['info'],
    queryFn: async () => await root.appControllerGetHello(...data).then(unwrap),
  })
}
