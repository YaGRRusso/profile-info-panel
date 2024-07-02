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
import ExperiencesCommonForm from '@/forms/ExperiencesCommonForm'
import { formatDate } from '@/helpers/date'
import { useExperiencesFindAll, useExperiencesRemove, useExperiencesUpdate } from '@/hooks'
import { ExperienceDto } from '@/sdk'

import { forwardRef, useState } from 'react'

export interface ExperiencesTableProps extends TableRootProps {}

const ExperiencesTable = forwardRef<HTMLTableElement, ExperiencesTableProps>(({ ...rest }, ref) => {
  const { params, setParams } = useQueryParams<CommonQueryParams>()
  const [editingExperience, setEditingExperience] = useState<ExperienceDto>()
  const { data, isFetching } = useExperiencesFindAll(params.page, params.limit)
  const deleteExperience = useExperiencesRemove()
  const updateExperience = useExperiencesUpdate()

  return (
    <>
      <Table.Root ref={ref} isLoading={isFetching} isEmpty={!data?.data.length} {...rest}>
        <Table.Header>
          <Table.Row hasHover={false}>
            <Table.Head>Role</Table.Head>
            <Table.Head>Description</Table.Head>
            <Table.Head>Organization</Table.Head>
            <Table.Head>Start</Table.Head>
            <Table.Head>End</Table.Head>
            <Table.Head className="text-right">Last Update</Table.Head>
            <Table.Head className="w-[1%] text-right">Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.data.map((experience) => (
            <Table.Row key={experience.id}>
              <Table.Cell>{experience.role}</Table.Cell>
              <Table.Cell>{experience.description}</Table.Cell>
              <Table.Cell>{experience.organization}</Table.Cell>
              <Table.Cell>
                {formatDate(experience.start, {
                  year: '2-digit',
                  month: 'long',
                  day: '2-digit',
                })}
              </Table.Cell>
              <Table.Cell aria-disabled={!experience.end}>
                {formatDate(experience.end, {
                  year: '2-digit',
                  month: 'long',
                  day: '2-digit',
                }) ?? 'Empty'}
              </Table.Cell>
              <Table.Cell className="text-right">
                {formatDate(experience.updatedAt, {
                  month: 'long',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Table.Cell>
              <Table.Cell className="text-right">
                <div className="flex items-center gap-2">
                  <EditButton
                    name={experience.role}
                    onClick={() => setEditingExperience(experience)}
                  />
                  <DeleteButton
                    name={experience.role}
                    handleConfirm={() => deleteExperience.mutate([experience.id])}
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
        title="Manage Experience"
        open={!!editingExperience}
        onOpenChange={() => setEditingExperience(undefined)}
      >
        <ExperiencesCommonForm
          isLoading={updateExperience.isPending}
          defaultValues={{
            ...editingExperience,
            start: editingExperience?.start ? new Date(editingExperience.start) : undefined,
            end: editingExperience?.end ? new Date(editingExperience.end) : undefined,
          }}
          customValues={{ id: editingExperience?.id }}
          handleSubmit={({ id, ...data }: any) =>
            updateExperience.mutate([id, data], {
              onSuccess: () => setEditingExperience(undefined),
            })
          }
        />
      </FloatingForm>
    </>
  )
})
ExperiencesTable.displayName = 'ExperiencesTable'

export default ExperiencesTable
