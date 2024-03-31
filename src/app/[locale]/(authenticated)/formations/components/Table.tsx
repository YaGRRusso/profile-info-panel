'use client'

import { DeleteButton, Table, TableRootProps, useToast } from '@/components'
import { formatDate } from '@/helpers/date'
import { useFormations } from '@/sdk'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import Link from 'next/link'
import { forwardRef } from 'react'

export interface FormationsTableProps extends TableRootProps {}

const FormationsTable = forwardRef<HTMLTableElement, FormationsTableProps>(
  ({ ...rest }, ref) => {
    const formations = useFormations()
    const queryClient = useQueryClient()
    const { toast } = useToast()

    const { data, isFetching } = useQuery({
      queryKey: ['formations'],
      queryFn: () => formations.formationsControllerFindAll(),
    })

    const deleteFormation = useMutation({
      mutationFn: formations.formationsControllerRemove.bind(formations),
      mutationKey: ['formationsControllerRemove'],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['formations'] })
        toast({
          title: 'Success',
          description: 'Removed successfully',
        })
      },
      onError: ({ response }: AxiosError<any>) => {
        toast({
          title: response?.data.name,
          description: response?.data.message,
          variant: 'destructive',
        })
      },
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
            <Table.Head>Start</Table.Head>
            <Table.Head>End</Table.Head>
            <Table.Head className="text-right">Last Update</Table.Head>
            <Table.Head className="w-[1%] text-right">Actions</Table.Head>
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
              <Table.Cell className="text-right">
                <DeleteButton
                  name={formation.name}
                  handleConfirm={() => deleteFormation.mutate(formation.id)}
                />
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
