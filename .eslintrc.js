const importGroups = [['^\\u0000'], ['^react', '^@?\\w']];

function getImportGroups() {
  const {
    compilerOptions: { paths },
  } = require(`${process.cwd()}/tsconfig.json`);

  const pathAliases =
    [
      ...new Set(
        Object.keys(paths)?.map((key) => key.replace(/[^A-Za-z-_]+/g, '')) ||
          [],
      ),
    ]?.join('|') || '';

  if (pathAliases) importGroups.push([`^@(${pathAliases})(/.*|$)`]);
  importGroups.push(['^\\.']);

  return importGroups;
}

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'sonarjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended-legacy',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './tsconfig.build.json',
      './tsconfig.node.json',
    ],
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'newline-before-return': 'error',
    'prettier/prettier': ['error', require(`${process.cwd()}/.prettierrc.js`)],
    'no-console': 'error',
    'unicorn/prefer-set-has': 0,
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/filename-case': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    'security/detect-object-injection': 'off',
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
    'simple-import-sort/imports': [
      'error',
      {
        groups: getImportGroups(),
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false,
        allowList: {
          Param: true,
          Params: true,
        },
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
  ignorePatterns: [
    '!**/*',
    'public',
    '.cache',
    'node_modules',
    '.next',
    'build',
    'dist',
  ],
};
