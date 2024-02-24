import { GetHelloProps } from '..'

import instance from '@/configs/axios'

const getHello: GetHelloProps = async () =>
  await instance.get('/').then((res) => res.data)

const root = {
  getHello,
}

export default root
