import { GetHelloProps } from '..'

import instance from '@/common/axios'

const getHello: GetHelloProps = async () =>
  await instance.get('/').then((res) => res.data)

const root = {
  getHello,
}

export default root
