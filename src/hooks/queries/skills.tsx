import { unwrap } from '@/helpers/response'
import { useSkills } from '@/sdk'
import { QueryDataProps } from '@/types/query-data'

import { useQuery } from '@tanstack/react-query'

export const useSkillsFindAll = (
  ...data: QueryDataProps<typeof skills.skillsControllerFindAll>
) => {
  const skills = useSkills()

  // return useInfiniteQuery({
  //   queryKey: ['skills', data],
  //   queryFn: async ({ pageParam }) =>
  //     await skills.skillsControllerFindAll(pageParam.toString()).then(unwrap),
  //   initialPageParam: 1,
  //   getNextPageParam: (lastPage) => lastPage?.pagination.nextPage,
  // })

  return useQuery({
    queryKey: ['skills', ...data],
    queryFn: async () => await skills.skillsControllerFindAll(...data).then(unwrap),
  })
}
