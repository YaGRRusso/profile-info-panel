import { clsx } from 'clsx'
import { FC, HTMLAttributes, ReactNode } from 'react'

const sizeVariants = {
  sm: 'max-w-2xl',
  md: 'max-w-3xl',
  lg: 'max-w-4xl',
}

export interface FormContainerProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
  title: string
  description: string
  size?: keyof typeof sizeVariants
}

const FormContainer: FC<FormContainerProps> = ({
  icon,
  title,
  description,
  size = 'md',
  children,
  ...rest
}) => {
  return (
    <main
      className={clsx(
        'mx-auto flex items-stretch rounded bg-gray-900 text-gray-50 shadow',
        sizeVariants[size],
      )}
      {...rest}
    >
      <div className="rounded-l bg-sky-600 p-12 max-sm:p-2" />
      <div className="flex flex-1 flex-col items-center justify-center gap-8 rounded-r p-12 max-sm:px-8">
        <div className="w-full">
          <div className="mb-4 text-sky-600 [&_svg]:h-12 [&_svg]:w-12">
            {icon}
          </div>
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
