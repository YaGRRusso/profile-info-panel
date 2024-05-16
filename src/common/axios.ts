import axios from 'axios'
import { getSession, signOut } from 'next-auth/react'

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

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error)
    switch (error.response.status) {
      case 401:
        return signOut()
      default:
        return Promise.reject(error)
    }
  },
)

export default instance
