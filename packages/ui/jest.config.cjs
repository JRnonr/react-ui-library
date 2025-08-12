/* eslint-disable */
const base = require('../../configs/jest.base.cjs');
const path = require('path');

/** @type {import('jest').Config} */
module.exports = {
  ...base,
  rootDir: __dirname,
  setupFilesAfterEnv: [path.join(__dirname, 'setupTests.ts')],
  moduleNameMapper: {
    ...base.moduleNameMapper,
    '^lucide-react$': path.join(__dirname, 'src/__mocks__/lucide-react.tsx'),
  },
}; 