const baseConfig = require('../../jest.base.config');
const [, packageName] = require('./package.json').name.split('/');

module.exports = {
  ...baseConfig,
  displayName: packageName,
  rootDir: '../..',
  roots: [`<rootDir>/packages/${packageName}`],
};
