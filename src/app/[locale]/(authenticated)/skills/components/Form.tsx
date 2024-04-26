'use client'

import { Button, ButtonProps, FloatingForm, useToast } from '@/components'
import SkillsCommonForm from '@/forms/SkillsCommonForm'
import { CreateSkillDto, useSkills } from '@/sdk'

import { Plus } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useTranslations } from 'next-intl'
import { forwardRef, useState } from 'react'

export interface SkillsFormProps extends ButtonProps {}

const SkillsForm = forwardRef<HTMLButtonElement, SkillsFormProps>(
  ({ ...rest }, ref) => {
    const tSkills = useTranslations('skills')
    const skills = useSkills()
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const [isFormOpen, setIsFormOpen] = useState(false)

    const createSkill = useMutation({
      mutationFn: skills.skillsControllerCreate.bind(skills),
      mutationKey: ['skillsControllerCreate'],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['skills'] })
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
            handleSubmit={(data) => createSkill.mutate(data as CreateSkillDto)}
          />
        </FloatingForm>
      </>
    )
  },
)
SkillsForm.displayName = 'Form'

export default SkillsForm
