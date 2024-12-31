module.exports = () => ({
  'unicorn/prevent-abbreviations': [
    'error',
    {
      checkFilenames: false,
      allowList: {
        Param: true,
        Params: true,
        Req: true,
        Res: true,
        Args: true,
      },
    },
  ],
  'unicorn/prefer-set-has': 0,
  'unicorn/prefer-top-level-await': 'off',
  'unicorn/filename-case': 'off',
  'unicorn/no-abusive-eslint-disable': 'error',
  'unicorn/import-style': [
    'error',
    {
      extendDefaultStyles: false,
      styles: {
        util: {
          named: true,
        },
        path: {
          named: true,
        },
      },
    },
  ],
});
