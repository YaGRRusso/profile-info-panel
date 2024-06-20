export type MutationDataProps<T extends (...args: any) => any> = {
  data: Parameters<T>
}
