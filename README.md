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
"lint:eslint": "eslint '{src,test,e2e,apps,packages}/**/*.{ts,tsx,js,jsx}' -c eslint.config.js",
"lint:eslint-fix": "npm run lint:eslint -- --fix",
"lint:prettier": "prettier '{src,test,e2e,apps,packages}/**/*.{ts,tsx,js,jsx}' --config .prettierrc.js --check",
"lint:prettier-fix": "npm run lint:prettier -- --write",
```

## [Changelog](./CHANGELOG.md)

## [License](./LICENSE)
