import { GetMeProps, PostLoginProps } from './types'

import instance from '@/common/axios'

const getMe: GetMeProps = async (data) =>
  await instance
    .get('/auth/me', {
      ...(data && {
        headers: { Authorization: 'Bearer ' + data },
      }),
    })
    .then((res) => res.data)

const postLogin: PostLoginProps = async (data) =>
  await instance.post('/auth', data).then((res) => res.data)

const auth = {
  getMe,
  postLogin,
}

export default auth
