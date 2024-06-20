'use client'

import { Button, ButtonProps, FloatingForm } from '@/components'
import ExperiencesCommonForm from '@/forms/ExperiencesCommonForm'
import { useExperiencesCreate } from '@/hooks'

import { Plus } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { forwardRef, useState } from 'react'

export interface ExperiencesFormProps extends ButtonProps {}

const ExperiencesForm = forwardRef<HTMLButtonElement, ExperiencesFormProps>(
  ({ ...rest }, ref) => {
    const tExperiences = useTranslations('experiences')
    const [isFormOpen, setIsFormOpen] = useState(false)

    const createExperience = useExperiencesCreate()

    return (
      <>
        <Button
          ref={ref}
          variant="outline"
          onClick={() => setIsFormOpen(true)}
          {...rest}
        >
          <Plus />
          {tExperiences('add')}
        </Button>
        <FloatingForm
          description="Fill the form below"
          title="Manage Experience"
          open={isFormOpen}
          onOpenChange={setIsFormOpen}
        >
          <ExperiencesCommonForm
            isLoading={createExperience.isPending}
            handleSubmit={({ ...data }: any) =>
              createExperience.mutate([data], {
                onSuccess: () => setIsFormOpen(false),
              })
            }
          />
        </FloatingForm>
      </>
    )
  },
)
ExperiencesForm.displayName = 'Form'

export default ExperiencesForm
