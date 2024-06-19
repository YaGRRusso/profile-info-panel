type FunctionProps<T> = Promise<T> | (() => Promise<T>)
type FallbackProps = (error: any) => void

/**
 * Auto do try catch
 * @param fn function to try
 * @param fallback optional fallback to catch
 * @returns fn result or null
 */
export const tryCatch = async <T>(
  fn: FunctionProps<T>,
  fallback?: FallbackProps,
): Promise<T | undefined> => {
  try {
    return typeof fn === 'function' ? await fn() : await fn
  } catch (error) {
    console.error(error)
    fallback?.(error)
    return undefined
  }
}
