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
  collectCoverageFrom: [
    '<rootDir>/app/javascript/**/*.js',
    '!<rootDir>/app/javascript/**/index.js',
    '!<rootDir>/app/javascript/packs/*.js',
    '!<rootDir>/app/javascript/*.js',
    '<rootDir>/app/components/**/*.js',
  ],
  reporters: ['default'],
  setupFilesAfterEnv: ['<rootDir>/app/javascript/setupTests.js'],
  transformIgnorePatterns: ['node_modules/*'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/javascript/$1',
  },
  roots: ['app/javascript', 'app/components'],
  testMatch: [
    '**/app/javascript/**/*.spec.(js|jsx|ts|tsx)',
    '**/app/components/**/*.spec.(js|jsx|ts|tsx)',
  ],
  testURL: 'http://localhost/',
  testPathIgnorePatterns: [],
};
