import { useToast } from '@/components'
import { FormationDto, useFormations } from '@/sdk'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useFormationsCreate = () => {
  const queryClient = useQueryClient()
  const formations = useFormations()

  const { toast } = useToast()

  return useMutation({
    mutationFn: formations.formationsControllerCreate.bind(formations),
    mutationKey: ['formationsControllerCreate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['formations'] })
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

export const useFormationsRemove = () => {
  const queryClient = useQueryClient()
  const formations = useFormations()

  const { toast } = useToast()

  return useMutation({
    mutationFn: formations.formationsControllerRemove.bind(formations),
    mutationKey: ['formationsControllerRemove'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['formations'] })
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

export const useFormationsUpdate = () => {
  const queryClient = useQueryClient()
  const formations = useFormations()

  const { toast } = useToast()

  return useMutation({
    mutationFn: ({ id, ...formation }: FormationDto) =>
      formations.formationsControllerUpdate(id, formation),
    mutationKey: ['formationsControllerUpdate'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['formations'] })
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
