'use client'

import {
  DeleteButton,
  EditButton,
  FloatingForm,
  Table,
  TableRootProps,
} from '@/components'
import FormationsCommonForm from '@/forms/FormationsCommonForm'
import { formatDate } from '@/helpers/date'
import {
  useFormationsFindAll,
  useFormationsRemove,
  useFormationsUpdate,
} from '@/hooks'
import { FormationDto } from '@/sdk'

import Link from 'next/link'
import { forwardRef, useState } from 'react'

export interface FormationsTableProps extends TableRootProps {}

const FormationsTable = forwardRef<HTMLTableElement, FormationsTableProps>(
  ({ ...rest }, ref) => {
    const [editingFormation, setEditingFormation] = useState<FormationDto>()
    const { data, isFetching } = useFormationsFindAll()
    const deleteFormation = useFormationsRemove()
    const updateFormation = useFormationsUpdate()

    return (
      <>
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
                <Table.Cell aria-disabled={!formation.certificate}>
                  <Link
                    href={formation?.certificate ?? '#'}
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
                  <div className="flex items-center gap-2">
                    <EditButton
                      name={formation.name}
                      onClick={() => setEditingFormation(formation)}
                    />
                    <DeleteButton
                      name={formation.name}
                      handleConfirm={() =>
                        deleteFormation.mutate([formation.id])
                      }
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <FloatingForm
          description="Fill the form below"
          title="Manage Formation"
          open={!!editingFormation}
          onOpenChange={() => setEditingFormation(undefined)}
        >
          <FormationsCommonForm
            isLoading={updateFormation.isPending}
            defaultValues={{
              ...editingFormation,
              start: editingFormation?.start
                ? new Date(editingFormation.start)
                : undefined,
              end: editingFormation?.end
                ? new Date(editingFormation.end)
                : undefined,
            }}
            customValues={{ id: editingFormation?.id }}
            handleSubmit={({ id, ...data }: any) =>
              updateFormation.mutate([id, data], {
                onSuccess: () => setEditingFormation(undefined),
              })
            }
          />
        </FloatingForm>
      </>
    )
  },
)
FormationsTable.displayName = 'FormationsTable'

export default FormationsTable
