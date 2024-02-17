import axios from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('session')

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(token && {
      Authorization: 'Bearer ' + token,
    }),
  },
})

export default request
