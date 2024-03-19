'use client'

import { Table } from '@/components'
import { skills as skillsService } from '@/services'

import { useQuery } from '@tanstack/react-query'
import { TableHTMLAttributes, forwardRef } from 'react'

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {}

const PageTable = forwardRef<HTMLTableElement, TableProps>(
  ({ ...rest }, ref) => {
    const skills = useQuery({
      queryKey: ['skills'],
      queryFn: async () => await skillsService.getSkills(),
    })

    return (
      <Table.Root ref={ref} {...rest}>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-[100px]">Identification</Table.Head>
            <Table.Head>Name</Table.Head>
            <Table.Head className="text-right">Category</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {skills.data?.map((skill) => (
            <Table.Row key={skill.id}>
              <Table.Cell className="font-medium">{skill.id}</Table.Cell>
              <Table.Cell>{skill.name}</Table.Cell>
              <Table.Cell className="text-right">{skill.category}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
)
PageTable.displayName = 'PageTable'

export default PageTable
