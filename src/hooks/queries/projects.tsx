import { unwrap } from '@/helpers/response'
import { useProjects } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useProjectsFindAll = (
  ...data: Parameters<typeof projects.projectsControllerFindAll>
) => {
  const projects = useProjects()

  return useQuery({
    queryKey: ['projects'],
    queryFn: async () =>
      await projects.projectsControllerFindAll(...data).then(unwrap),
  })
}
