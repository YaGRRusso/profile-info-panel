import { useToast } from '@/components'
import { unwrap } from '@/helpers/response'
import { useExperiences } from '@/sdk'
import { MutationDataProps } from '@/types/mutation-data'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useExperiencesCreate = () => {
  const queryClient = useQueryClient()
  const experiences = useExperiences()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (
      data: MutationDataProps<typeof experiences.experiencesControllerCreate>,
    ) => await experiences.experiencesControllerCreate(...data).then(unwrap),
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
    mutationFn: async (
      data: MutationDataProps<typeof experiences.experiencesControllerRemove>,
    ) => await experiences.experiencesControllerRemove(...data).then(unwrap),
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
    mutationFn: async (
      data: MutationDataProps<typeof experiences.experiencesControllerUpdate>,
    ) => await experiences.experiencesControllerUpdate(...data).then(unwrap),
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
