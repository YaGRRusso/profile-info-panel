import nextJest from 'next/jest.js'

import type { Config } from 'jest'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  rootDir: './',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testRegex: '.*\\.test\\.ts$',
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  collectCoverageFrom: ['**/*.service.(t|j)s', '**/*.controller.(t|j)s'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '^@/app/(.*)$': ['<rootDir>/src/app/$1'],
    '^@/common/(.*)$': ['<rootDir>/src/common/$1'],
    '^@/components': ['<rootDir>/src/components'],
    '^@/contexts/(.*)$': ['<rootDir>/src/contexts/$1'],
    '^@/helpers/(.*)$': ['<rootDir>/src/helpers/$1'],
    '^@/services/(.*)$': ['<rootDir>/src/services/$1'],
    '^@/(.*)$': ['<rootDir>/src/$1'],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
