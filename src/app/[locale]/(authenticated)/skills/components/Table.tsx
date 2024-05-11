'use client'

import {
  DeleteButton,
  EditButton,
  FloatingForm,
  Table,
  TableRootProps,
  useToast,
} from '@/components'
import SkillsCommonForm from '@/forms/SkillsCommonForm'
import { formatDate } from '@/helpers/date'
import { SkillDto, useSkills } from '@/sdk'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { forwardRef, useState } from 'react'

export interface SkillsTableProps extends TableRootProps {}

const SkillsTable = forwardRef<HTMLTableElement, SkillsTableProps>(
  ({ ...rest }, ref) => {
    const [editingSkill, setEditingSkill] = useState<SkillDto>()
    const skills = useSkills()
    const queryClient = useQueryClient()
    const { toast } = useToast()

    const { data, isFetching } = useQuery({
      queryKey: ['skills'],
      queryFn: () => skills.skillsControllerFindAll(),
    })

    const updateSkill = useMutation({
      mutationFn: ({ id, ...skill }: SkillDto) =>
        skills.skillsControllerUpdate(id, skill),
      mutationKey: ['skillsControllerUpdate'],
      onSuccess: () => {
        setEditingSkill(undefined)
        queryClient.invalidateQueries({ queryKey: ['skills'] })
        toast({
          title: 'Success',
          description: 'Updated successfully',
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

    const deleteSkill = useMutation({
      mutationFn: skills.skillsControllerRemove.bind(skills),
      mutationKey: ['skillsControllerRemove'],
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['skills'] })
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
                    <EditButton
                      name={skill.name}
                      onClick={() => setEditingSkill(skill)}
                    />
                    <DeleteButton
                      name={skill.name}
                      handleConfirm={() => deleteSkill.mutate(skill.id)}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <FloatingForm
          description="Fill the form below"
          title="Manage Skill"
          open={!!editingSkill}
          onOpenChange={() => setEditingSkill(undefined)}
        >
          <SkillsCommonForm
            isLoading={updateSkill.isPending}
            handleSubmit={(data: any) => updateSkill.mutate(data)}
            defaultValues={editingSkill}
            customValues={{ id: editingSkill?.id }}
          />
        </FloatingForm>
      </>
    )
  },
)
SkillsTable.displayName = 'SkillsTable'

export default SkillsTable
