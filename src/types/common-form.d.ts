export type CommonFormValuesProps<T, TT> = {
  defaultValues?: Partial<T>
  customValues?: Record<any, any | TT>
  handleSubmit: (data: T & Record<any, any>) => void
  isEditing?: boolean
}
