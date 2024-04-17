'use client'

import { Button, ButtonProps, FloatingForm, useToast } from '@/components'
import ExperiencesCommonForm from '@/forms/ExperiencesCommonForm'
import { useExperiences } from '@/sdk'

import { Plus } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { forwardRef, useState } from 'react'

export interface ExperiencesFormProps extends ButtonProps {}

const ExperiencesForm = forwardRef<HTMLButtonElement, ExperiencesFormProps>(
  ({ ...rest }, ref) => {
    const experiences = useExperiences()
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const [isFormOpen, setIsFormOpen] = useState(false)

    const createExperience = useMutation({
      mutationFn: experiences.experiencesControllerCreate.bind(experiences),
      mutationKey: ['experiencesControllerCreate'],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['experiences'] })
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
          Add Experience
        </Button>
        <FloatingForm
          description="Fill the form below"
          title="Manage Experience"
          open={isFormOpen}
          onOpenChange={setIsFormOpen}
        >
          <ExperiencesCommonForm
            isLoading={createExperience.isPending}
            handleSubmit={(data) => createExperience.mutate(data as any)}
          />
        </FloatingForm>
      </>
    )
  },
)
ExperiencesForm.displayName = 'Form'

export default ExperiencesForm
