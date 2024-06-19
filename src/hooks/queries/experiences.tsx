import { unwrap } from '@/helpers/response'
import { useExperiences } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useExperiencesFindAll = (
  ...data: Parameters<typeof experiences.experiencesControllerFindAll>
) => {
  const experiences = useExperiences()

  return useQuery({
    queryKey: ['experiences'],
    queryFn: async () =>
      await experiences.experiencesControllerFindAll(...data).then(unwrap),
  })
}
