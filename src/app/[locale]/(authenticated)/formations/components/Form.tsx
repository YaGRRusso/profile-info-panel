'use client'

import { Button, ButtonProps, FloatingForm } from '@/components'
import FormationsCommonForm from '@/forms/FormationsCommonForm'
import { useFormationsCreate } from '@/hooks'

import { Plus } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { forwardRef, useState } from 'react'

export interface FormationsFormProps extends ButtonProps {}

const FormationsForm = forwardRef<HTMLButtonElement, FormationsFormProps>(({ ...rest }, ref) => {
  const tFormations = useTranslations('formations')
  const [isFormOpen, setIsFormOpen] = useState(false)
  const createFormation = useFormationsCreate()

  return (
    <>
      <Button ref={ref} variant="outline" onClick={() => setIsFormOpen(true)} {...rest}>
        <Plus />
        {tFormations('add')}
      </Button>
      <FloatingForm
        description="Fill the form below"
        title="Manage Formation"
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
      >
        <FormationsCommonForm
          isLoading={createFormation.isPending}
          handleSubmit={({ ...data }: any) =>
            createFormation.mutate([data], {
              onSuccess: () => setIsFormOpen(false),
            })
          }
        />
      </FloatingForm>
    </>
  )
})
FormationsForm.displayName = 'Form'

export default FormationsForm
