/**
 * Fast parse fetch response
 * @param promise function to try
 * @returns promise result as json
 */
export const unwrap = async (promise: Response) => {
  return promise.json()
}
