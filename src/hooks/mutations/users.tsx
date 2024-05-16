import { useRouter } from '@/common/navigation'
import { useToast } from '@/components'
import { useUsers } from '@/sdk'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const useUsersUpdate = () => {
  const queryClient = useQueryClient()
  const users = useUsers()

  const { toast } = useToast()

  return useMutation({
    mutationKey: ['me'],
    mutationFn: users.usersControllerUpdate.bind(users),
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
    mutationFn: users.usersControllerCreate.bind(users),
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
