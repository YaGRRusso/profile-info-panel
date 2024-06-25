import { useToast } from '@/components'
import { unwrap } from '@/helpers/response'
import { useProjects } from '@/sdk'
import { MutationDataProps } from '@/types/mutation-data'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useProjectsCreate = () => {
  const queryClient = useQueryClient()
  const projects = useProjects()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (data: MutationDataProps<typeof projects.projectsControllerCreate>) =>
      await projects.projectsControllerCreate(...data).then(unwrap),
    mutationKey: ['projectsControllerCreate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
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

export const useProjectsRemove = () => {
  const queryClient = useQueryClient()
  const projects = useProjects()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (data: MutationDataProps<typeof projects.projectsControllerRemove>) =>
      await projects.projectsControllerRemove(...data).then(unwrap),
    mutationKey: ['projectsControllerRemove'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
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

export const useProjectsUpdate = () => {
  const queryClient = useQueryClient()
  const projects = useProjects()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (data: MutationDataProps<typeof projects.projectsControllerUpdate>) =>
      await projects.projectsControllerUpdate(...data).then(unwrap),
    mutationKey: ['projectsControllerUpdate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
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
