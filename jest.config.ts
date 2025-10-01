import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1' // se usar /pages
  },
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  transformIgnorePatterns: ['/node_modules/']
};

export default createJestConfig(customJestConfig);
