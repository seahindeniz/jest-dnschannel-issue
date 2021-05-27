import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  roots: ['./test'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  testRegex: '\\.(test|spec)\\.tsx?$',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;
