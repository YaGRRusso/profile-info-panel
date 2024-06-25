import { unwrap } from '@/helpers/response'
import { useExperiences } from '@/sdk'
import { QueryDataProps } from '@/types/query-data'

import { useQuery } from '@tanstack/react-query'

export const useExperiencesFindAll = (
  ...data: QueryDataProps<typeof experiences.experiencesControllerFindAll>
) => {
  const experiences = useExperiences()

  return useQuery({
    queryKey: ['experiences'],
    queryFn: async () => await experiences.experiencesControllerFindAll(...data).then(unwrap),
  })
}
