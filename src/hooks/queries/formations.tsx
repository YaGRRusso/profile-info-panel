import { unwrap } from '@/helpers/response'
import { useFormations } from '@/sdk'
import { QueryDataProps } from '@/types/query-data'

import { useQuery } from '@tanstack/react-query'

export const useFormationsFindAll = (
  ...data: QueryDataProps<typeof formations.formationsControllerFindAll>
) => {
  const formations = useFormations()

  return useQuery({
    queryKey: ['formations'],
    queryFn: async () =>
      await formations.formationsControllerFindAll(...data).then(unwrap),
  })
}
