'use client'

import { DeleteButton, Table, TableRootProps, useToast } from '@/components'
import { formatDate } from '@/helpers/date'
import { useExperiences } from '@/sdk'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { forwardRef } from 'react'

export interface ExperiencesTableProps extends TableRootProps {}

const ExperiencesTable = forwardRef<HTMLTableElement, ExperiencesTableProps>(
  ({ ...rest }, ref) => {
    const experiences = useExperiences()
    const queryClient = useQueryClient()
    const { toast } = useToast()

    const { data, isFetching } = useQuery({
      queryKey: ['experiences'],
      queryFn: () => experiences.experiencesControllerFindAll(),
    })

    const deleteExperience = useMutation({
      mutationFn: experiences.experiencesControllerRemove.bind(experiences),
      mutationKey: ['experiencesControllerRemove'],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['experiences'] })
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
