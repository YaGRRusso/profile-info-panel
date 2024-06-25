import { useToast } from '@/components'
import { unwrap } from '@/helpers/response'
import { useCourses } from '@/sdk'
import { MutationDataProps } from '@/types/mutation-data'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useCoursesCreate = () => {
  const queryClient = useQueryClient()
  const courses = useCourses()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (data: MutationDataProps<typeof courses.coursesControllerCreate>) =>
      await courses.coursesControllerCreate(...data).then(unwrap),
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
    mutationFn: async (data: MutationDataProps<typeof courses.coursesControllerRemove>) =>
      await courses.coursesControllerRemove(...data).then(unwrap),
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
    mutationFn: async (data: MutationDataProps<typeof courses.coursesControllerUpdate>) =>
      await courses.coursesControllerUpdate(...data).then(unwrap),
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
