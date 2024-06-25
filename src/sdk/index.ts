import {
  AuthApi,
  CoursesApi,
  DefaultApi,
  ExperiencesApi,
  FormationsApi,
  ProjectsApi,
  SkillsApi,
  UsersApi,
} from './sdk'

import instance from '@/common/axios'

const singletons = new Map<string, any>()

function useSingleton<T>(key: string, factory: () => T): T {
  if (singletons.has(key)) return singletons.get(key)
  singletons.set(key, factory())
  return singletons.get(key)
}

export type * from './api'

export function useRoot() {
  return useSingleton('default', () => new DefaultApi(undefined, undefined, instance))
}

export function useAuth() {
  return useSingleton('authentication', () => new AuthApi(undefined, undefined, instance))
}

export function useUsers() {
  return useSingleton('users', () => new UsersApi(undefined, undefined, instance))
}

export function useSkills() {
  return useSingleton('skills', () => new SkillsApi(undefined, undefined, instance))
}

export function useCourses() {
  return useSingleton('courses', () => new CoursesApi(undefined, undefined, instance))
}

export function useFormations() {
  return useSingleton('formations', () => new FormationsApi(undefined, undefined, instance))
}

export function useExperiences() {
  return useSingleton('experiences', () => new ExperiencesApi(undefined, undefined, instance))
}

export function useProjects() {
  return useSingleton('projects', () => new ProjectsApi(undefined, undefined, instance))
}
