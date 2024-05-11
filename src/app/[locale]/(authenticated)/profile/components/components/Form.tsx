'use client'

import { Skeleton } from '@/components'
import UsersCommonForm, { UsersCommonFormProps } from '@/forms/UsersCommonForm'
import { useUsersUpdate, useUsersFindMe } from '@/hooks'

import { forwardRef } from 'react'

export interface ProfileFormProps extends Partial<UsersCommonFormProps> {}

const ProfileForm = forwardRef<HTMLFormElement, ProfileFormProps>(
  ({ ...rest }, ref) => {
    const usersControllerFindMe = useUsersFindMe()
    const usersControllerUpdate = useUsersUpdate()

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
