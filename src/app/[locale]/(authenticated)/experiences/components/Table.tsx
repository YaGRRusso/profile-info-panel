'use client'

import { DeleteButton, Table, TableRootProps } from '@/components'
import { formatDate } from '@/helpers/date'
import { useExperiencesFindAll, useExperiencesRemove } from '@/hooks'

import { forwardRef } from 'react'

export interface ExperiencesTableProps extends TableRootProps {}

const ExperiencesTable = forwardRef<HTMLTableElement, ExperiencesTableProps>(
  ({ ...rest }, ref) => {
    const { data, isFetching } = useExperiencesFindAll()
    const deleteExperience = useExperiencesRemove()

    return (
      <Table.Root
        ref={ref}
        isLoading={isFetching}
        isEmpty={!data?.data.length}
        {...rest}
      >
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
                <DeleteButton
                  name={experience.role}
                  handleConfirm={() => deleteExperience.mutate(experience.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
)
ExperiencesTable.displayName = 'ExperiencesTable'

export default ExperiencesTable
