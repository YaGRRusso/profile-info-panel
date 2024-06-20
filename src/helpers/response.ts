import { AxiosResponse } from 'axios'

/**
 * Fast parse fetch response
 * @param promise function to try
 * @returns promise result as json
 */
export const unwrap = async <T, U>(promise: AxiosResponse<T, U>) => {
  return promise.data
}
