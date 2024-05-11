'use client'

import { Skeleton, useToast } from '@/components'
import UsersCommonForm, { UsersCommonFormProps } from '@/forms/UsersCommonForm'
import { useUsersFindMe } from '@/hooks/queries/users'
import { useUsers } from '@/sdk'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { forwardRef } from 'react'

export interface ProfileFormProps extends Partial<UsersCommonFormProps> {}

const ProfileForm = forwardRef<HTMLFormElement, ProfileFormProps>(
  ({ ...rest }, ref) => {
    const users = useUsers()
    const queryClient = useQueryClient()
    const { toast } = useToast()

    const usersControllerFindMe = useUsersFindMe()

    const usersControllerUpdate = useMutation({
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

    return usersControllerFindMe.isLoading ? (
      <Skeleton className="h-12 w-full" repeat={3} />
    ) : (
      <UsersCommonForm
        ref={ref}
        handleSubmit={(data) => usersControllerUpdate.mutate(data as any)}
        className="max-w-3xl"
        defaultValues={usersControllerFindMe.data?.data as any}
        isLoading={usersControllerFindMe.isLoading}
        isEditing
        {...rest}
      />
    )
  },
)
ProfileForm.displayName = 'ProfileForm'

export default ProfileForm
