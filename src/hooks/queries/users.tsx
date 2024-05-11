import { useUsers } from '@/sdk'

import { useQuery } from '@tanstack/react-query'

export const useUsersFindMe = () => {
  const users = useUsers()

  return useQuery({
    queryKey: ['me'],
    queryFn: () => users.usersControllerFindMe(),
  })
}
