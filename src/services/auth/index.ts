import { GetMeProps } from './types'

import request from '../axios'

const getMe: GetMeProps = async () =>
  await request.get('/auth/me').then((res) => res.data)

const auth = {
  getMe,
}

export default auth
