/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/?(*.)+(spec|test).[t]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/' // Add this line to ignore the lib directory
  ],
  reporters: [
    'default',
    ['jest-junit', { outputName: 'junit-custom-unitTests.xml' }]
  ],
  coverageReporters: ['lcov', 'text'],
  resetMocks: true
};
