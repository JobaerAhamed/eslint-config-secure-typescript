module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', '@typescript-eslint'],
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '!**/*',
    'public',
    '.cache',
    'node_modules',
    '.next',
    'build',
    'dist',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:security/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')],
    'simple-import-sort/imports': 'error',
    'no-console': 'error',
    'unicorn/prefer-set-has': 0,
    'unicorn/prevent-abbreviations': ['error', { checkFilenames: false }],
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/filename-case': 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['interface', 'typeAlias'],
        format: ['PascalCase'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      excludedFiles: '*.ts',
      env: {
        es6: true,
        jest: true,
        node: true,
        browser: true,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      extends: [
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
      ],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
};
