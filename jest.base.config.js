module.exports = {
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
