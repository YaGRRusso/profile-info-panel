'use client'

import { Button, ButtonProps, FloatingForm } from '@/components'
import SkillsCommonForm from '@/forms/SkillsCommonForm'
import { useSkillsCreate } from '@/hooks'

import { Plus } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { forwardRef, useState } from 'react'

export interface SkillsFormProps extends ButtonProps {}

const SkillsForm = forwardRef<HTMLButtonElement, SkillsFormProps>(({ ...rest }, ref) => {
  const tSkills = useTranslations('skills')
  const [isFormOpen, setIsFormOpen] = useState(false)
  const createSkill = useSkillsCreate()

  return (
    <>
      <Button ref={ref} variant="outline" onClick={() => setIsFormOpen(true)} {...rest}>
        <Plus />
        {tSkills('add')}
      </Button>
      <FloatingForm
        description="Fill the form below"
        title="Manage Skill"
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
      >
        <SkillsCommonForm
          isLoading={createSkill.isPending}
          handleSubmit={({ ...data }: any) =>
            createSkill.mutate([data], {
              onSuccess: () => setIsFormOpen(false),
            })
          }
        />
      </FloatingForm>
    </>
  )
})
SkillsForm.displayName = 'Form'

export default SkillsForm
