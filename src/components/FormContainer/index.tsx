import { FC, HTMLAttributes } from 'react'

export interface FormContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

const FormContainer: FC<FormContainerProps> = ({
  title,
  description,
  children,
  ...rest
}) => {
  return (
    <main
      className="mx-auto flex max-w-3xl items-stretch rounded bg-gray-900 text-gray-50 shadow"
      {...rest}
    >
      <div className="rounded-l bg-sky-600 p-12 max-sm:p-2" />
      <div className="flex flex-1 flex-col items-center justify-center gap-8 rounded-r p-12 max-sm:px-8">
        <div className="w-full">
          <h1 className="text-3xl font-bold">{title}</h1>
          <span className="text-gray-400">{description}</span>
        </div>
        {children}
      </div>
    </main>
  )
}

FormContainer.displayName = 'FormContainer'

export default FormContainer
