// eslint-disable-next-line import/no-extraneous-dependencies
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/airbnb',
    'plugin:import/typescript',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['./vite.config.ts'] }],
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    '**/*.min.js',
    '**/*-min.js',
    '**/*.bundle.js',
    '**/*.d.ts',
    '.vscode',
  ],
};
