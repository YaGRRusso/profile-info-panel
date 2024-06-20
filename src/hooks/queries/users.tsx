import { unwrap } from '@/helpers/response'
import { useUsers } from '@/sdk'
import { QueryDataProps } from '@/types/query-data'

import { useQuery } from '@tanstack/react-query'

export const useUsersFindMe = (
  ...data: QueryDataProps<typeof users.usersControllerFindMe>
) => {
  const users = useUsers()

  return useQuery({
    queryKey: ['me'],
    queryFn: async () =>
      await users.usersControllerFindMe(...data).then(unwrap),
  })
}
