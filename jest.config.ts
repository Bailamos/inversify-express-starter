import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  extensionsToTreatAsEsm: ['.ts'],
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['text-summary'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testPathIgnorePatterns: ['/dist/']
};

export default config;
