'use client'

import { Button, ButtonProps, FloatingForm, useToast } from '@/components'
import FormationsCommonForm from '@/forms/FormationsCommonForm'
import { useFormations } from '@/sdk'

import { Plus } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useTranslations } from 'next-intl'
import { forwardRef, useState } from 'react'

export interface FormationsFormProps extends ButtonProps {}

const FormationsForm = forwardRef<HTMLButtonElement, FormationsFormProps>(
  ({ ...rest }, ref) => {
    const tFormations = useTranslations('formations')
    const formations = useFormations()
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const [isFormOpen, setIsFormOpen] = useState(false)

    const createFormation = useMutation({
      mutationFn: formations.formationsControllerCreate.bind(formations),
      mutationKey: ['formationsControllerCreate'],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['formations'] })
        setIsFormOpen(false)
        toast({
          title: 'Success',
          description: 'Created successfully',
        })
      },
      onError: ({ response }: AxiosError<any>) => {
        toast({
          title: response?.data.name,
          description: response?.data.message,
          variant: 'destructive',
        })
      },
    })

    return (
      <>
        <Button
          ref={ref}
          variant="outline"
          onClick={() => setIsFormOpen(true)}
          {...rest}
        >
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
            handleSubmit={(data) => createFormation.mutate(data as any)}
          />
        </FloatingForm>
      </>
    )
  },
)
FormationsForm.displayName = 'Form'

export default FormationsForm
