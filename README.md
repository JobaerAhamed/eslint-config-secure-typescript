# Secure-Typescript

![npm](https://img.shields.io/npm/dw/eslint-config-secure-typescript)

Some helpful eslint config in one place

## Getting Started

Install the required library

```sh
npm install -D -E eslint-config-secure-typescript eslint prettier
```

Once installed, add an eslint config file to project root

```js
// .eslintrc.js

module.exports = {
  extends: 'secure-typescript',
};
```

And thats it!

## Applied Rules

Base recommended rules:

- `eslint:recommended`
- `plugin:prettier/recommended`
- `plugin:sonarjs/recommended`
- `plugin:unicorn/recommended`
- `plugin:security/recommended`

Additional config for React:

- `plugin:react/recommended`
- `plugin:jsx-a11y/recommended`
- `plugin:react-hooks/recommended`

Custom rules:

```
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
```

Additional rules for React:

```
'react-hooks/rules-of-hooks': 'error',
'react/react-in-jsx-scope': 'off',
'react/prop-types': 'off',
```

## Recommendation

If using vscode, it helps if format and fix on save is enabled. put the following code on `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

Some useful `package.json` scripts:

Install required deps:

```sh
npm install -D -E concurrently
```

then add the following to `package.json` scripts:

```
"lint": "concurrently \"npm run lint:prettier\" \"npm run lint:eslint\" \"npm run lint:type\"",
"lint:type": "tsc --noEmit",
"lint:fix": "concurrently \"npm run lint:prettier-fix\" \"npm run lint:eslint-fix\"",
"lint:eslint": "eslint \"{src,test,e2e}/**/*.{ts,tsx}\" -c .eslintrc.js",
"lint:eslint-fix": "eslint \"{src,test,e2e}/**/*.{ts,tsx}\" -c .eslintrc.js --fix",
"lint:prettier": "prettier --config .prettierrc.js 'src/**/*.{ts,tsx}' --check",
"lint:prettier-fix": "prettier --config .prettierrc.js 'src/**/*.{ts,tsx}' --write",
```

## [Changelog](./CHANGELOG.md)

## [License](./LICENSE)
