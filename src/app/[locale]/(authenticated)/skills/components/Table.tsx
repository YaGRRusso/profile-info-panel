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
import SkillsCommonForm from '@/forms/SkillsCommonForm'
import { formatDate } from '@/helpers/date'
import { useSkillsFindAll, useSkillsRemove, useSkillsUpdate } from '@/hooks'
import { SkillDto } from '@/sdk'

import { forwardRef, useState } from 'react'

export interface SkillsTableProps extends TableRootProps {}

const SkillsTable = forwardRef<HTMLTableElement, SkillsTableProps>(({ ...rest }, ref) => {
  const { params, setParams } = useQueryParams<CommonQueryParams>()
  const [editingSkill, setEditingSkill] = useState<SkillDto>()
  const { data, isFetching } = useSkillsFindAll(params.page, params.limit)
  const updateSkill = useSkillsUpdate()
  const deleteSkill = useSkillsRemove()

  return (
    <>
      <Table.Root ref={ref} isLoading={isFetching} isEmpty={!data?.data.length} {...rest}>
        <Table.Header>
          <Table.Row hasHover={false}>
            <Table.Head>Name</Table.Head>
            <Table.Head>Category</Table.Head>
            <Table.Head className="text-right">Last Update</Table.Head>
            <Table.Head className="w-[1%] text-right">Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.data.map((skill) => (
            <Table.Row key={skill.id}>
              <Table.Cell>{skill.name}</Table.Cell>
              <Table.Cell>{skill.category}</Table.Cell>
              <Table.Cell className="text-right">
                {formatDate(skill.updatedAt, {
                  month: 'long',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Table.Cell>
              <Table.Cell className="text-right">
                <div className="flex items-center gap-2">
                  <EditButton name={skill.name} onClick={() => setEditingSkill(skill)} />
                  <DeleteButton
                    name={skill.name}
                    handleConfirm={() => deleteSkill.mutate([skill.id])}
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
        title="Manage Skill"
        open={!!editingSkill}
        onOpenChange={() => setEditingSkill(undefined)}
      >
        <SkillsCommonForm
          isLoading={updateSkill.isPending}
          defaultValues={editingSkill}
          customValues={{ id: editingSkill?.id }}
          handleSubmit={({ id, ...data }: any) =>
            updateSkill.mutate([id, data], {
              onSuccess: () => setEditingSkill(undefined),
            })
          }
        />
      </FloatingForm>
    </>
  )
})
SkillsTable.displayName = 'SkillsTable'

export default SkillsTable
