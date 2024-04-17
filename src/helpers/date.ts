/**
 * Format dates
 * @param date date to format
 * @param options intl format options
 * @param language language to format
 * @returns formatted date as string
 */
export const formatDate = (
  date?: Date | string,
  options?: Intl.DateTimeFormatOptions,
  language?: Intl.LocalesArgument,
) => {
  const opt: Intl.DateTimeFormatOptions = {
    ...options,
  }

  return date && new Date(date).toLocaleString(language, opt)
}
