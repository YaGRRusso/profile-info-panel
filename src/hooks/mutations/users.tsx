import { useRouter } from '@/common/navigation'
import { useToast } from '@/components'
import { unwrap } from '@/helpers/response'
import { useUsers } from '@/sdk'
import { MutationDataProps } from '@/types/mutation-data'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useUsersUpdate = () => {
  const queryClient = useQueryClient()
  const users = useUsers()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (
      data: MutationDataProps<typeof users.usersControllerUpdate>,
    ) => await users.usersControllerUpdate(...data).then(unwrap),
    mutationKey: ['me'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
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

export const useUsersCreate = () => {
  const { replace } = useRouter()
  const users = useUsers()

  const { toast } = useToast()

  return useMutation({
    mutationFn: async (
      data: MutationDataProps<typeof users.usersControllerCreate>,
    ) => await users.usersControllerCreate(...data).then(unwrap),
    mutationKey: ['usersControllerCreate'],
    onSuccess: () => replace('/signin'),
    onError: ({ response }: AxiosError<any>) => {
      toast({
        title: response?.data.name,
        description: response?.data.message,
        variant: 'destructive',
      })
    },
  })
}
