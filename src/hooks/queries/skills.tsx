import { unwrap } from '@/helpers/response'
import { useSkills } from '@/sdk'
import { QueryDataProps } from '@/types/query-data'

import { useQuery } from '@tanstack/react-query'

export const useSkillsFindAll = (
  ...data: QueryDataProps<typeof skills.skillsControllerFindAll>
) => {
  const skills = useSkills()

  return useQuery({
    queryKey: ['skills'],
    queryFn: async () =>
      await skills.skillsControllerFindAll(...data).then(unwrap),
  })
}
