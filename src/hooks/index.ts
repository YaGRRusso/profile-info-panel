// queries
export { useCoursesFindAll } from './queries/courses'
export { useExperiencesFindAll } from './queries/experiences'
export { useFormationsFindAll } from './queries/formations'
export { useProjectsFindAll } from './queries/projects'
export { useRootInfo } from './queries/root'
export { useSkillsFindAll } from './queries/skills'
export { useUsersFindMe } from './queries/users'

// mutations
export { useCoursesCreate, useCoursesRemove, useCoursesUpdate } from './mutations/courses'
export {
  useExperiencesCreate,
  useExperiencesRemove,
  useExperiencesUpdate,
} from './mutations/experiences'
export {
  useFormationsCreate,
  useFormationsRemove,
  useFormationsUpdate,
} from './mutations/formations'
export { useProjectsCreate, useProjectsRemove, useProjectsUpdate } from './mutations/projects'
export { useSkillsCreate, useSkillsRemove, useSkillsUpdate } from './mutations/skills'
export { useUsersCreate, useUsersUpdate } from './mutations/users'
