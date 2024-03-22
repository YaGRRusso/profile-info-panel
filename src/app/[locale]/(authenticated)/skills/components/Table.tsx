import { Table, TableRootProps } from '@/components'
import { unwrap } from '@/helpers/response'
import { useSkills } from '@/sdk'

import { useQuery } from '@tanstack/react-query'
import { forwardRef } from 'react'

export interface SkillsTableProps extends TableRootProps {}

const SkillsTable = forwardRef<HTMLTableElement, SkillsTableProps>(
  ({ ...rest }, ref) => {
    const skills = useSkills()

    const { data, isFetching } = useQuery({
      queryKey: ['skills'],
      queryFn: () => skills.skillsControllerFindAll().then(unwrap),
    })

    return (
      <Table.Root ref={ref} {...rest}>
        <Table.Caption>A list of your recent invoices.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-[100px]">Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head className="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell className="font-medium">INV001</Table.Cell>
            <Table.Cell>Paid</Table.Cell>
            <Table.Cell>Credit Card</Table.Cell>
            <Table.Cell className="text-right">$250.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    )
  },
)
SkillsTable.displayName = 'SkillsTable'

export default SkillsTable
