'use client'

import { DeleteButton, Table, TableRootProps } from '@/components'
import { formatDate } from '@/helpers/date'
import { useProjectsFindAll, useProjectsRemove } from '@/hooks'

import Link from 'next/link'
import { forwardRef } from 'react'

export interface ProjectsTableProps extends TableRootProps {}

const ProjectsTable = forwardRef<HTMLTableElement, ProjectsTableProps>(
  ({ ...rest }, ref) => {
    const { data, isFetching } = useProjectsFindAll()
    const deleteProject = useProjectsRemove()

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
            <Table.Head>Description</Table.Head>
            <Table.Head>Image</Table.Head>
            <Table.Head>Link</Table.Head>
            <Table.Head className="text-right">Last Update</Table.Head>
            <Table.Head className="w-[1%] text-right">Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.data.map((project) => (
            <Table.Row key={project.id}>
              <Table.Cell>{project.name}</Table.Cell>
              <Table.Cell>{project.description}</Table.Cell>
              <Table.Cell>
                <Link href={project.image} target="_blank" className="emphasis">
                  {project.image}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link href={project.link} target="_blank" className="emphasis">
                  {project.link}
                </Link>
              </Table.Cell>
              <Table.Cell className="text-right">
                {formatDate(project.updatedAt, {
                  month: 'long',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Table.Cell>
              <Table.Cell className="text-right">
                <DeleteButton
                  name={project.name}
                  handleConfirm={() => deleteProject.mutate(project.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
)
ProjectsTable.displayName = 'ProjectsTable'

export default ProjectsTable
