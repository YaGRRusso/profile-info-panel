'use client'

import { Table, TableRootProps } from '@/components'
import { formatDate } from '@/helpers/date'
import { useCourses } from '@/sdk'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { forwardRef } from 'react'

export interface CoursesTableProps extends TableRootProps {}

const CoursesTable = forwardRef<HTMLTableElement, CoursesTableProps>(
  ({ ...rest }, ref) => {
    const courses = useCourses()

    const { data, isFetching } = useQuery({
      queryKey: ['courses'],
      queryFn: () => courses.coursesControllerFindAll(),
    })

    return (
      <Table.Root
        ref={ref}
        isLoading={isFetching}
        isEmpty={!data?.data.length}
        {...rest}
      >
        <Table.Header>
          <Table.Row hasHover={false}>
            <Table.Head>Name</Table.Head>
            <Table.Head>School</Table.Head>
            <Table.Head>Description</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Certificate</Table.Head>
            <Table.Head>Hours</Table.Head>
            <Table.Head className="text-right">Last Update</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.data.map((course) => (
            <Table.Row key={course.id}>
              <Table.Cell>{course.name}</Table.Cell>
              <Table.Cell>{course.school}</Table.Cell>
              <Table.Cell>{course.description}</Table.Cell>
              <Table.Cell>{course.status}</Table.Cell>
              <Table.Cell>
                <Link
                  href={course.certificate}
                  target="_blank"
                  className="emphasis"
                >
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
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
)
CoursesTable.displayName = 'CoursesTable'

export default CoursesTable
