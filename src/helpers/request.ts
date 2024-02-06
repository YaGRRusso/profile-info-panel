/**
 * Fast try catch block
 * @param promise function to try
 * @param fallback optional fallback to catch
 * @returns promise result or error
 */
export const tryCatch = async (
  promise: Promise<any>,
  fallback?: (error?: any) => void,
) => {
  try {
    return await promise
  } catch (error) {
    return fallback ? fallback(error) : error
  }
}
