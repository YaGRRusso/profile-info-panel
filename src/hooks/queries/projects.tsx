import { useProjects } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useProjectsFindAll = () => {
  const projects = useProjects()

  return useQuery({
    queryKey: ['projects'],
    queryFn: () => projects.projectsControllerFindAll(),
  })
}
