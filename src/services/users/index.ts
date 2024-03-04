import { PostUserProps } from './types'

import instance from '@/common/axios'

const postUser: PostUserProps = async (data) =>
  await instance.post('/users', data).then((res) => res.data)

const users = {
  postUser,
}

export default users
