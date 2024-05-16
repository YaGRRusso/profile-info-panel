import { useSkills } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useSkillsFindAll = () => {
  const skills = useSkills()

  return useQuery({
    queryKey: ['skills'],
    queryFn: () => skills.skillsControllerFindAll(),
  })
}
