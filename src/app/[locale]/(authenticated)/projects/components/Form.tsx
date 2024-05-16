'use client'

import { Button, ButtonProps, FloatingForm } from '@/components'
import ProjectsCommonForm from '@/forms/ProjectsCommonForm'
import { useProjectsCreate } from '@/hooks'

import { Plus } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { forwardRef, useState } from 'react'

export interface ProjectsFormProps extends ButtonProps {}

const ProjectsForm = forwardRef<HTMLButtonElement, ProjectsFormProps>(
  ({ ...rest }, ref) => {
    const tProjects = useTranslations('projects')
    const [isFormOpen, setIsFormOpen] = useState(false)
    const createProject = useProjectsCreate()

    return (
      <>
        <Button
          ref={ref}
          variant="outline"
          onClick={() => setIsFormOpen(true)}
          {...rest}
        >
          <Plus />
          {tProjects('add')}
        </Button>
        <FloatingForm
          description="Fill the form below"
          title="Manage Project"
          open={isFormOpen}
          onOpenChange={setIsFormOpen}
        >
          <ProjectsCommonForm
            isLoading={createProject.isPending}
            handleSubmit={(data) =>
              createProject.mutate(data as any, {
                onSuccess: () => setIsFormOpen(false),
              })
            }
          />
        </FloatingForm>
      </>
    )
  },
)
ProjectsForm.displayName = 'Form'

export default ProjectsForm
