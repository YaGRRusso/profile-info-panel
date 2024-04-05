'use client'

import { Button, ButtonProps, FloatingForm, useToast } from '@/components'
import CoursesCommonForm from '@/forms/CoursesCommonForm'
import { CreateCourseDto, useCourses } from '@/sdk'

import { Plus } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { forwardRef, useState } from 'react'

export interface CoursesFormProps extends ButtonProps {}

const CoursesForm = forwardRef<HTMLButtonElement, CoursesFormProps>(
  ({ ...rest }, ref) => {
    const courses = useCourses()
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const [isFormOpen, setIsFormOpen] = useState(false)

    const createCourse = useMutation({
      mutationFn: courses.coursesControllerCreate.bind(courses),
      mutationKey: ['coursesControllerCreate'],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['courses'] })
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
          Add Course
        </Button>
        <FloatingForm
          description="Fill the form below"
          title="Manage Course"
          open={isFormOpen}
          onOpenChange={setIsFormOpen}
        >
          <CoursesCommonForm
            isLoading={createCourse.isPending}
            handleSubmit={(data) =>
              createCourse.mutate(data as CreateCourseDto)
            }
          />
        </FloatingForm>
      </>
    )
  },
)
CoursesForm.displayName = 'Form'

export default CoursesForm
