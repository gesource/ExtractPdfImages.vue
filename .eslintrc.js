module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-alert': 0,
    'prefer-destructuring': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
