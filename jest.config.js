module.exports = {
  moduleDirectories: ['node_modules', 'app/javascript'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  automock: false,
  resetMocks: true,
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  cacheDirectory: '<rootDir>/.jest-cache',
  collectCoverage: true,
  coverageDirectory: 'coverage/frontend',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: ['<rootDir>/app/javascript/**/*.js'],
  reporters: ['default'],
  setupFilesAfterEnv: ['<rootDir>/spec/javascript/setupTests.js'],
  transformIgnorePatterns: ['node_modules/*'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/javascript/$1',
  },
  roots: ['spec/javascript'],
  testMatch: ['**/spec/javascript/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
};
