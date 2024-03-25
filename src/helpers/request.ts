/**
 * Auto do try catch
 * @param fn function to try
 * @param fallback optional fallback to catch
 * @returns fn result or null
 */
export const tryCatch = async (
  fn: Promise<any> | (() => Promise<any>),
  fallback?: (error?: any) => void,
) => {
  try {
    return typeof fn === 'function' ? await fn() : await fn
  } catch (error) {
    if (fallback) {
      return fallback(error)
    } else {
      console.error(error)
      return error
    }
  }
}
