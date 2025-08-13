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
    '^@velvet/icons$': '<rootDir>/../icons/src'
  },
}; 