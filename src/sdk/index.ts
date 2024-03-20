import { AuthApi, DefaultApi } from './sdk'

import instance from '@/common/axios'

export const useRoot = new DefaultApi(undefined, undefined, instance)

export const useAuth = new AuthApi(undefined, undefined, instance)
