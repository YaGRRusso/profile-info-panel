import { useToast } from '@/components'
import { unwrap } from '@/helpers/response'
import { useFormations } from '@/sdk'
import { MutationDataProps } from '@/types/mutation-data'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useFormationsCreate = () => {
  const queryClient = useQueryClient()
  const formations = useFormations()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (data: MutationDataProps<typeof formations.formationsControllerCreate>) =>
      await formations.formationsControllerCreate(...data).then(unwrap),
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
    mutationFn: async (data: MutationDataProps<typeof formations.formationsControllerRemove>) =>
      await formations.formationsControllerRemove(...data).then(unwrap),
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
    mutationFn: async (data: MutationDataProps<typeof formations.formationsControllerUpdate>) =>
      await formations.formationsControllerUpdate(...data).then(unwrap),
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
