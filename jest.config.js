/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  coverageReporters: [
    [
      'text',
      {
        file: 'report.txt',
      },
    ],
  ],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  reporters: ['default', 'github-actions'],
  testEnvironment: 'node',
};
