'use client'

import { Button, ButtonProps, FloatingForm } from '@/components'
import CoursesCommonForm from '@/forms/CoursesCommonForm'
import { useCoursesCreate } from '@/hooks'

import { Plus } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { forwardRef, useState } from 'react'

export interface CoursesFormProps extends ButtonProps {}

const CoursesForm = forwardRef<HTMLButtonElement, CoursesFormProps>(
  ({ ...rest }, ref) => {
    const tCourses = useTranslations('courses')
    const [isFormOpen, setIsFormOpen] = useState(false)

    const createCourse = useCoursesCreate()

    return (
      <>
        <Button
          ref={ref}
          variant="outline"
          onClick={() => setIsFormOpen(true)}
          {...rest}
        >
          <Plus />
          {tCourses('add')}
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
              createCourse.mutate(data as any, {
                onSuccess: () => setIsFormOpen(false),
              })
            }
          />
        </FloatingForm>
      </>
    )
  },
)
CoursesForm.displayName = 'Form'

export default CoursesForm
