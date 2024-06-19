import { unwrap } from '@/helpers/response'
import { useFormations } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useFormationsFindAll = (
  ...data: Parameters<typeof formations.formationsControllerFindAll>
) => {
  const formations = useFormations()

  return useQuery({
    queryKey: ['formations'],
    queryFn: async () =>
      await formations.formationsControllerFindAll(...data).then(unwrap),
  })
}
