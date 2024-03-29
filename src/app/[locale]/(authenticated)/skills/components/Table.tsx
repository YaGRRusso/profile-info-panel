'use client'

import { Table, TableRootProps } from '@/components'
import { formatDate } from '@/helpers/date'
import { useSkills } from '@/sdk'

import { useQuery } from '@tanstack/react-query'
import { forwardRef } from 'react'

export interface SkillsTableProps extends TableRootProps {}

const SkillsTable = forwardRef<HTMLTableElement, SkillsTableProps>(
  ({ ...rest }, ref) => {
    const skills = useSkills()

    const { data, isFetching } = useQuery({
      queryKey: ['skills'],
      queryFn: () => skills.skillsControllerFindAll(),
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
            <Table.Head>Category</Table.Head>
            <Table.Head className="text-right">Last Update</Table.Head>
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
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
)
SkillsTable.displayName = 'SkillsTable'

export default SkillsTable
