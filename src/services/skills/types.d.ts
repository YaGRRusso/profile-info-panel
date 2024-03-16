export type GetSkillOutput = {
  category: string
  createdAt: Date
  id: string
  name: string
  updatedAt: Date
}
export type GetSkillsProps = () => Promise<GetSkillOutput[]>
