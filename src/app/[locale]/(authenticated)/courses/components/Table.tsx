'use client'

import {
  DeleteButton,
  EditButton,
  FloatingForm,
  Pagination,
  Table,
  TableRootProps,
} from '@/components'
import { CommonQueryParams, useQueryParams } from '@/contexts/query'
import CoursesCommonForm from '@/forms/CoursesCommonForm'
import { formatDate } from '@/helpers/date'
import { useCoursesFindAll, useCoursesRemove, useCoursesUpdate } from '@/hooks'
import { CourseDto } from '@/sdk'

import Link from 'next/link'
import { forwardRef, useState } from 'react'

export interface CoursesTableProps extends TableRootProps {}

const CoursesTable = forwardRef<HTMLTableElement, CoursesTableProps>(({ ...rest }, ref) => {
  const { params, setParams } = useQueryParams<CommonQueryParams>()
  const [editingCourse, setEditingCourse] = useState<CourseDto>()
  const { data, isFetching } = useCoursesFindAll(params.page, params.limit)
  const deleteCourse = useCoursesRemove()
  const updateCourse = useCoursesUpdate()

  return (
    <>
      <Table.Root ref={ref} isLoading={isFetching} isEmpty={!data?.data.length} {...rest}>
        <Table.Header>
          <Table.Row hasHover={false}>
            <Table.Head>Name</Table.Head>
            <Table.Head>School</Table.Head>
            <Table.Head>Description</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Certificate</Table.Head>
            <Table.Head>Hours</Table.Head>
            <Table.Head className="text-right">Last Update</Table.Head>
            <Table.Head className="w-[1%] text-right">Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.data.map((course) => (
            <Table.Row key={course.id}>
              <Table.Cell>{course.name}</Table.Cell>
              <Table.Cell>{course.school}</Table.Cell>
              <Table.Cell>{course.description}</Table.Cell>
              <Table.Cell>{course.status}</Table.Cell>
              <Table.Cell aria-disabled={!course.certificate}>
                <Link href={course?.certificate ?? '#'} target="_blank" className="emphasis">
                  {course.certificate}
                </Link>
              </Table.Cell>
              <Table.Cell>{course.hours}</Table.Cell>
              <Table.Cell className="text-right">
                {formatDate(course.updatedAt, {
                  month: 'long',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Table.Cell>
              <Table.Cell className="text-right">
                <div className="flex items-center gap-2">
                  <EditButton name={course.name} onClick={() => setEditingCourse(course)} />
                  <DeleteButton
                    name={course.name}
                    handleConfirm={() => deleteCourse.mutate([course.id])}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {data?.pagination && data.pagination.totalPages > 1 && (
        <Pagination
          totalPages={data?.pagination.totalPages}
          currentPage={data?.pagination.currentPage}
          totalRecords={data?.pagination.totalRecords}
          onPageChange={(pg) => setParams({ page: pg.toString() })}
        />
      )}

      <FloatingForm
        description="Fill the form below"
        title="Manage Course"
        open={!!editingCourse}
        onOpenChange={() => setEditingCourse(undefined)}
      >
        <CoursesCommonForm
          isLoading={updateCourse.isPending}
          defaultValues={editingCourse}
          customValues={{ id: editingCourse?.id }}
          handleSubmit={({ id, ...data }: any) =>
            updateCourse.mutate([id, data], {
              onSuccess: () => setEditingCourse(undefined),
            })
          }
        />
      </FloatingForm>
    </>
  )
})
CoursesTable.displayName = 'CoursesTable'

export default CoursesTable
