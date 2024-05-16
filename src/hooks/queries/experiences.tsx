import { useExperiences } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useExperiencesFindAll = () => {
  const experiences = useExperiences()

  return useQuery({
    queryKey: ['experiences'],
    queryFn: () => experiences.experiencesControllerFindAll(),
  })
}
