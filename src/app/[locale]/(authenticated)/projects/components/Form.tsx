'use client'

import { Button, ButtonProps, FloatingForm, useToast } from '@/components'
import ProjectsCommonForm from '@/forms/ProjectsCommonForm'
import { CreateProjectDto, useProjects } from '@/sdk'

import { Plus } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { forwardRef, useState } from 'react'

export interface ProjectsFormProps extends ButtonProps {}

const ProjectsForm = forwardRef<HTMLButtonElement, ProjectsFormProps>(
  ({ ...rest }, ref) => {
    const projects = useProjects()
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const [isFormOpen, setIsFormOpen] = useState(false)

    const createProject = useMutation({
      mutationFn: projects.projectsControllerCreate.bind(projects),
      mutationKey: ['projectsControllerCreate'],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['projects'] })
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
          Add Project
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
              createProject.mutate(data as CreateProjectDto)
            }
          />
        </FloatingForm>
      </>
    )
  },
)
ProjectsForm.displayName = 'Form'

export default ProjectsForm
