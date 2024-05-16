import { useCourses } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useCoursesFindAll = () => {
  const courses = useCourses()

  return useQuery({
    queryKey: ['courses'],
    queryFn: () => courses.coursesControllerFindAll(),
  })
}
