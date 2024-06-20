import { unwrap } from '@/helpers/response'
import { useCourses } from '@/sdk'
import { QueryDataProps } from '@/types/query-data'

import { useQuery } from '@tanstack/react-query'

export const useCoursesFindAll = (
  ...data: QueryDataProps<typeof courses.coursesControllerFindAll>
) => {
  const courses = useCourses()

  return useQuery({
    queryKey: ['courses'],
    queryFn: async () =>
      await courses.coursesControllerFindAll(...data).then(unwrap),
  })
}
