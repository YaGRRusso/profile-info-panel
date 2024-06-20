export type CommonFormValuesProps<T = any, TT = any> = {
  defaultValues?: Partial<T>
  customValues?: Record<any, any | TT>
  handleSubmit: (data: T & Record<any, any>) => void
  isEditing?: boolean
}
