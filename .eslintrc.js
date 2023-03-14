module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    // 'import/no-extraneous-dependencies': ['error', { dependencies: true }],
    'consistent-return': 'off',
    // max-len': 150,
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
