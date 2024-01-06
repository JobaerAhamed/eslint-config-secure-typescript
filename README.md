# Secure-Typescript

<p align="left">
<a href="https://www.npmjs.com/package/eslint-config-secure-typescript" target="_blank"><img src="https://img.shields.io/npm/v/eslint-config-secure-typescript.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/eslint-config-secure-typescript" target="_blank"><img src="https://img.shields.io/npm/dw/eslint-config-secure-typescript" alt="NPM Downloads" /></a>
</p>

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

## Prerequisites

This config assumes a few things:

1. `.prettierrc.js` is present in project root
2. `tsconfig.json` is present in project root
3. path alias is present in `tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Applied Rules

Base rules:

- `eslint:recommended`,
- `plugin:@typescript-eslint/strict-type-checked`,
- `plugin:@typescript-eslint/stylistic-type-checked`,
- `plugin:prettier/recommended`,
- `plugin:unicorn/recommended`,
- `plugin:sonarjs/recommended`,
- `plugin:security/recommended-legacy`,
- `plugin:eslint-comments/recommended`,

Additional config for React:

- `plugin:react/recommended`
- `plugin:jsx-a11y/recommended`
- `plugin:react-hooks/recommended`

There are a few custom rules that are included in the `.eslintrc.js` file. Feel free to take a look and override them if needed.

## Recommendation

If using vscode, it helps if format and fix on save is enabled. put the following code on `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## Some useful `package.json` scripts:

Install required deps:

```sh
npm install -D -E concurrently
```

then add the following to `package.json` scripts:

```
"lint": "concurrently \"npm run lint:prettier\" \"npm run lint:eslint\" \"npm run lint:type\"",
"lint:fix": "concurrently \"npm run lint:prettier-fix\" \"npm run lint:eslint-fix\"",
"lint:type": "tsc --noEmit",
"lint:eslint": "eslint '{src,test,e2e}/**/*.{ts,tsx}' -c .eslintrc.js",
"lint:eslint-fix": "npm run lint:eslint -- --fix",
"lint:prettier": "prettier '{src,test,e2e}/**/*.{ts,tsx}' --config .prettierrc.js --check",
"lint:prettier-fix": "npm run lint:prettier -- --write",
```

## [Changelog](./CHANGELOG.md)

## [License](./LICENSE)
