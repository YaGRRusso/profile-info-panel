export type CommonFormValuesProps<T = unknown, TT = unknown> = {
  defaultValues?: Partial<T>
  customValues?: Record<any, any | TT>
  handleSubmit: (data: T & Record<any, any>) => void
  isEditing?: boolean
}
