import { GetSkillsProps } from './types'

import instance from '@/common/axios'

const getSkills: GetSkillsProps = async () =>
  await instance.get('/skills').then((res) => res.data)

const skills = {
  getSkills,
}

export default skills
