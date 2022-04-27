module.exports = {
  extends: [
    'eslint-config-ali/typescript/vue',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'warn',
  },
};
