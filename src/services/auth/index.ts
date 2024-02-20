import { GetMeProps, PostLoginProps } from './types'

import request from '../axios'

const getMe: GetMeProps = async () =>
  await request.get('/auth/me').then((res) => res.data)

const postLogin: PostLoginProps = async (data) =>
  await request.post('/auth', data).then((res) => res.data)

const auth = {
  getMe,
  postLogin,
}

export default auth
