import { AxiosResponse } from 'axios'

/**
 * Fast parse fetch response
 * @param promise function to try
 * @returns promise result as json
 */
export const unwrap = async (promise: AxiosResponse<any, any>) => {
  return promise.data
}
