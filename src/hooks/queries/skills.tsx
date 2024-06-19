import { unwrap } from '@/helpers/response'
import { useSkills } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useSkillsFindAll = (
  ...data: Parameters<typeof skills.skillsControllerFindAll>
) => {
  const skills = useSkills()

  return useQuery({
    queryKey: ['skills'],
    queryFn: async () =>
      await skills.skillsControllerFindAll(...data).then(unwrap),
  })
}
