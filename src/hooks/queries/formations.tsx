import { useFormations } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useFormationsFindAll = () => {
  const formations = useFormations()

  return useQuery({
    queryKey: ['formations'],
    queryFn: () => formations.formationsControllerFindAll(),
  })
}
