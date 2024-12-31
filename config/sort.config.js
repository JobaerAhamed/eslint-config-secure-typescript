const { existsSync } = require('fs');

const getPathAliases = () => {
  if (existsSync(process.cwd() + '/tsconfig.json')) {
    const tsconfig = require(process.cwd() + '/tsconfig.json');
    const paths = tsconfig?.compilerOptions?.paths;
    if (paths) {
      return Object.keys(paths).map((key) => key.split('/')[0] + '/.+');
    }

    return [];
  }
};

module.exports = () => ({
  'perfectionist/sort-decorators': 'off',
  'perfectionist/sort-classes': 'off',
  'perfectionist/sort-variable-declarations': ['error'],
  'perfectionist/sort-intersection-types': ['error'],
  'perfectionist/sort-heritage-clauses': ['error'],
  'perfectionist/sort-array-includes': ['error'],
  'perfectionist/sort-union-types': ['error'],
  'perfectionist/sort-switch-case': ['error'],
  'perfectionist/sort-interfaces': ['error'],
  'perfectionist/sort-modules': ['error'],
  'perfectionist/sort-objects': ['error'],
  'perfectionist/sort-enums': ['error'],
  'perfectionist/sort-sets': ['error'],
  'perfectionist/sort-maps': ['error'],
  'perfectionist/sort-object-types': [
    'error',
    { type: 'line-length', order: 'asc' },
  ],
  'perfectionist/sort-jsx-props': [
    'error',
    { type: 'line-length', order: 'asc' },
  ],
  'perfectionist/sort-imports': [
    'error',
    {
      type: 'line-length',
      order: 'asc',
      specialCharacters: 'keep',
      internalPattern: ['^~/.+', '^@/.+', ...getPathAliases()],
      partitionByComment: true,
      partitionByNewLine: false,
      newlinesBetween: 'always',
      tsconfigRootDir: process.cwd(),
    },
  ],
  'perfectionist/sort-exports': [
    'error',
    { type: 'line-length', order: 'asc' },
  ],
  'perfectionist/sort-named-imports': [
    'error',
    { type: 'line-length', order: 'asc' },
  ],
  'perfectionist/sort-named-exports': [
    'error',
    { type: 'line-length', order: 'asc' },
  ],
});
