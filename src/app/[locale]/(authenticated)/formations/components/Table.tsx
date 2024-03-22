'use client'

import { IconText, Table, TableRootProps } from '@/components'
import { formatDate } from '@/helpers/date'
import { useFormations } from '@/sdk'

import { CircleNotch } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { forwardRef } from 'react'

export interface FormationsTableProps extends TableRootProps {}

const FormationsTable = forwardRef<HTMLTableElement, FormationsTableProps>(
  ({ ...rest }, ref) => {
    const formations = useFormations()

    const { data, isFetching } = useQuery({
      queryKey: ['formations'],
      queryFn: () => formations.formationsControllerFindAll(),
    })

    return (
      <Table.Root ref={ref} {...rest}>
        {!data && (
          <Table.Caption className="py-8">
            <IconText
              icon={isFetching && <CircleNotch className="animate-spin" />}
              text={isFetching ? 'Loading...' : 'Empty'}
            />
          </Table.Caption>
        )}
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>School</Table.Head>
            <Table.Head>Description</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Certificate</Table.Head>
            <Table.Head>Start</Table.Head>
            <Table.Head>End</Table.Head>
            <Table.Head className="text-right">Last Update</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.data.map((formation) => (
            <Table.Row key={formation.id}>
              <Table.Cell>{formation.name}</Table.Cell>
              <Table.Cell>{formation.school}</Table.Cell>
              <Table.Cell>{formation.description}</Table.Cell>
              <Table.Cell>{formation.status}</Table.Cell>
              <Table.Cell>
                <Link
                  href={formation.certificate}
                  target="_blank"
                  className="emphasis"
                >
                  {formation.certificate}
                </Link>
              </Table.Cell>
              <Table.Cell>
                {formatDate(formation.start, {
                  year: '2-digit',
                  month: 'long',
                  day: '2-digit',
                })}
              </Table.Cell>
              <Table.Cell aria-disabled={!formation.end}>
                {formatDate(formation.end, {
                  year: '2-digit',
                  month: 'long',
                  day: '2-digit',
                }) ?? 'Empty'}
              </Table.Cell>
              <Table.Cell className="text-right">
                {formatDate(formation.updatedAt, {
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
FormationsTable.displayName = 'FormationsTable'

export default FormationsTable
