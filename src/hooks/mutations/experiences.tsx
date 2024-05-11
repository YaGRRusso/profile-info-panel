import { useToast } from '@/components'
import { ExperienceDto, useExperiences } from '@/sdk'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useExperiencesCreate = () => {
  const queryClient = useQueryClient()
  const experiences = useExperiences()

  const { toast } = useToast()

  return useMutation({
    mutationFn: experiences.experiencesControllerCreate.bind(experiences),
    mutationKey: ['experiencesControllerCreate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experiences'] })
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

export const useExperiencesRemove = () => {
  const queryClient = useQueryClient()
  const experiences = useExperiences()

  const { toast } = useToast()

  return useMutation({
    mutationFn: experiences.experiencesControllerRemove.bind(experiences),
    mutationKey: ['experiencesControllerRemove'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experiences'] })
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

export const useExperiencesUpdate = () => {
  const queryClient = useQueryClient()
  const experiences = useExperiences()

  const { toast } = useToast()

  return useMutation({
    mutationFn: ({ id, ...experience }: ExperienceDto) =>
      experiences.experiencesControllerUpdate(id, experience),
    mutationKey: ['experiencesControllerUpdate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experiences'] })
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
