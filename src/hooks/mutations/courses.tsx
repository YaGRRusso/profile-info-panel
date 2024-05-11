import { useToast } from '@/components'
import { CourseDto, useCourses } from '@/sdk'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useCoursesCreate = () => {
  const queryClient = useQueryClient()
  const courses = useCourses()

  const { toast } = useToast()

  return useMutation({
    mutationFn: courses.coursesControllerCreate.bind(courses),
    mutationKey: ['coursesControllerCreate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
      toast({
        title: 'Success',
        description: 'Created successfully',
      })
    },
    onError: ({ response }: AxiosError<any>) => {
      toast({
        title: response?.data.name,
        description: response?.data.message,
        variant: 'destructive',
      })
    },
  })
}

export const useCoursesRemove = () => {
  const queryClient = useQueryClient()
  const courses = useCourses()

  const { toast } = useToast()

  return useMutation({
    mutationFn: courses.coursesControllerRemove.bind(courses),
    mutationKey: ['coursesControllerRemove'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
      toast({
        title: 'Success',
        description: 'Removed successfully',
      })
    },
    onError: ({ response }: AxiosError<any>) => {
      toast({
        title: response?.data.name,
        description: response?.data.message,
        variant: 'destructive',
      })
    },
  })
}

export const useCoursesUpdate = () => {
  const queryClient = useQueryClient()
  const courses = useCourses()

  const { toast } = useToast()

  return useMutation({
    mutationFn: ({ id, ...course }: CourseDto) =>
      courses.coursesControllerUpdate(id, course),
    mutationKey: ['coursesControllerUpdate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
      toast({
        title: 'Success',
        description: 'Updated successfully',
      })
    },
    onError: ({ response }: AxiosError<any>) => {
      toast({
        title: response?.data.name,
        description: response?.data.message,
        variant: 'destructive',
      })
    },
  })
}
