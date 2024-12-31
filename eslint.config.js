const tseslint = require('typescript-eslint');
const eslint = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-plugin-prettier/recommended');
const perfectionist = require('eslint-plugin-perfectionist');
const stylistic = require('@stylistic/eslint-plugin');
const sonarjs = require('eslint-plugin-sonarjs');
const unicorn = require('eslint-plugin-unicorn');
const security = require('eslint-plugin-security');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const eslintComments = require('eslint-plugin-eslint-comments');
const eslintPluginN = require('eslint-plugin-n');
const jest = require('eslint-plugin-jest');

const getParserProjects = require('./config/parser.config');
const getPrettierRules = require('./config/eslint-prettier.config');
const getImportSortRules = require('./config/import-sort.config');
const getStylisticRules = require('./config/stylistic.config');

module.exports = tseslint.config(
  { files: ['**/*.{ts,js,tsx,jsx}'] },
  eslint.configs.recommended,
  // tseslint
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
        project: getParserProjects(),
      },
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.nodeBuiltin,
      },
    },
  },

  // extra nodejs rules
  eslintPluginN.configs['flat/recommended'],

  // sonarjs
  sonarjs.configs.recommended,

  // unicorn
  unicorn.configs['flat/recommended'],
  {
    rules: {
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
    },
  },

  // security
  security.configs.recommended,
  {
    rules: {
      'security/detect-object-injection': 'off',
    },
  },

  // perfectionist
  perfectionist.configs['recommended-line-length'],
  {
    rules: getImportSortRules(),
  },

  // stylistic
  {
    plugins: { '@stylistic': stylistic },
    rules: getStylisticRules(),
  },
  // prettier
  prettier,
  {
    rules: getPrettierRules(),
  },

  // eslint-comments
  {
    plugins: { eslintComments },
    rules: {
      'eslintComments/disable-enable-pair': 'off',
      'eslintComments/no-aggregating-enable': 'off',
      'eslintComments/no-duplicate-disable': 'error',
      'eslintComments/no-unlimited-disable': 'error',
      'eslintComments/no-unused-disable': 'error',
      'eslintComments/no-unused-enable': 'error',
      'eslintComments/no-use': [
        'error',
        {
          allow: [
            'eslint',
            'eslint-disable-next-line',
            'eslint-env',
            'globals',
          ],
        },
      ],
    },
  },

  // common rules
  {
    rules: {
      'newline-before-return': 'error',
      'no-console': 'error',
      'no-unused-vars': 'off',
      'no-shadow': 'off',
      'no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-this': ['error'],
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['interface', 'typeAlias'],
          format: ['PascalCase'],
        },
      ],
    },
    ignores: [
      '!**/*',
      'public',
      '.cache',
      'node_modules',
      '.next',
      'build',
      'dist',
    ],
  },

  // react overrides,
  {
    files: ['**/*.{tsx,jsx}'],
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
    ...jsxA11y.flatConfigs.strict,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.react,
        ...globals.jest,
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.strict.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
    },
  },

  // jest overrides
  {
    files: ['**/*.{test,spec,e2e-spec}.{ts,js,tsx,jsx}'],
    ...jest.configs['flat/recommended'],
    languageOptions: {
      globals: jest.environments.globals.globals,
    },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
);
