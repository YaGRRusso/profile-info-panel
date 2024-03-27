import axios from 'axios'
import { getSession } from 'next-auth/react'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(async (config) => {
  const session = await getSession()
  if (session?.token) config.headers.Authorization = `Bearer ${session.token}`
  return config
})

// instance.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

export default instance
