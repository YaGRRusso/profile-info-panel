import { useToast } from '@/components'
import { unwrap } from '@/helpers/response'
import { useSkills } from '@/sdk'
import { MutationDataProps } from '@/types/mutation-data'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useSkillsCreate = () => {
  const queryClient = useQueryClient()
  const skills = useSkills()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (data: MutationDataProps<typeof skills.skillsControllerCreate>) =>
      await skills.skillsControllerCreate(...data).then(unwrap),
    mutationKey: ['skillsControllerCreate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] })
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

export const useSkillsRemove = () => {
  const queryClient = useQueryClient()
  const skills = useSkills()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (data: MutationDataProps<typeof skills.skillsControllerRemove>) =>
      await skills.skillsControllerRemove(...data).then(unwrap),
    mutationKey: ['skillsControllerRemove'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] })
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

export const useSkillsUpdate = () => {
  const queryClient = useQueryClient()
  const skills = useSkills()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (data: MutationDataProps<typeof skills.skillsControllerUpdate>) =>
      await skills.skillsControllerUpdate(...data).then(unwrap),
    mutationKey: ['skillsControllerUpdate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] })
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
