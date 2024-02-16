import { GetHelloProps } from '..'
import request from '../axios'

const getHello: GetHelloProps = async () =>
  await request.get('/').then((res) => res.data)

const root = {
  getHello,
}

export default root
