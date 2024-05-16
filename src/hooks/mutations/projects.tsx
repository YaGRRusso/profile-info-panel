import { useToast } from '@/components'
import { ProjectDto, useProjects } from '@/sdk'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useProjectsCreate = () => {
  const queryClient = useQueryClient()
  const projects = useProjects()

  const { toast } = useToast()

  return useMutation({
    mutationFn: projects.projectsControllerCreate.bind(projects),
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
    mutationFn: projects.projectsControllerRemove.bind(projects),
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
    mutationFn: ({ id, ...project }: ProjectDto) =>
      projects.projectsControllerUpdate(id, project),
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
