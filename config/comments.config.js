module.exports = () => ({
  'eslint-comments/disable-enable-pair': 'off',
  'eslint-comments/no-aggregating-enable': 'off',
  'eslint-comments/no-duplicate-disable': 'error',
  'eslint-comments/no-unlimited-disable': 'error',
  'eslint-comments/no-unused-disable': 'error',
  'eslint-comments/no-unused-enable': 'error',
  'eslint-comments/no-use': [
    'error',
    {
      allow: ['eslint', 'eslint-disable-next-line', 'eslint-env', 'globals'],
    },
  ],
});
