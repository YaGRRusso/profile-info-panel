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
    '^@/(.*)$': ['<rootDir>/src/$1'],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
