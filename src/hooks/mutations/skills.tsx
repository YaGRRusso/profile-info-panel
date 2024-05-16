import { useToast } from '@/components'
import { SkillDto, useSkills } from '@/sdk'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useSkillsCreate = () => {
  const queryClient = useQueryClient()
  const skills = useSkills()

  const { toast } = useToast()

  return useMutation({
    mutationFn: skills.skillsControllerCreate.bind(skills),
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
    mutationFn: skills.skillsControllerRemove.bind(skills),
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
    mutationFn: ({ id, ...skill }: SkillDto) =>
      skills.skillsControllerUpdate(id, skill),
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
