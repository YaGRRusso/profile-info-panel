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
import ProjectsCommonForm from '@/forms/ProjectsCommonForm'
import { formatDate } from '@/helpers/date'
import { useProjectsFindAll, useProjectsRemove, useProjectsUpdate } from '@/hooks'
import { ProjectDto } from '@/sdk'

import Link from 'next/link'
import { forwardRef, useState } from 'react'

export interface ProjectsTableProps extends TableRootProps {}

const ProjectsTable = forwardRef<HTMLTableElement, ProjectsTableProps>(({ ...rest }, ref) => {
  const { params, setParams } = useQueryParams<CommonQueryParams>()
  const [editingProject, setEditingProject] = useState<ProjectDto>()
  const { data, isFetching } = useProjectsFindAll(params.page, params.limit)
  const deleteProject = useProjectsRemove()
  const updateProject = useProjectsUpdate()

  return (
    <>
      <Table.Root ref={ref} isLoading={isFetching} isEmpty={!data?.data.length} {...rest}>
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
                <div className="flex items-center gap-2">
                  <EditButton name={project.name} onClick={() => setEditingProject(project)} />
                  <DeleteButton
                    name={project.name}
                    handleConfirm={() => deleteProject.mutate([project.id])}
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
        title="Manage Project"
        open={!!editingProject}
        onOpenChange={() => setEditingProject(undefined)}
      >
        <ProjectsCommonForm
          isLoading={updateProject.isPending}
          defaultValues={editingProject}
          customValues={{ id: editingProject?.id }}
          handleSubmit={({ id, ...data }: any) =>
            updateProject.mutate([id, data], {
              onSuccess: () => setEditingProject(undefined),
            })
          }
        />
      </FloatingForm>
    </>
  )
})
ProjectsTable.displayName = 'ProjectsTable'

export default ProjectsTable
