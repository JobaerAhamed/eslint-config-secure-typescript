const { existsSync } = require('fs');

module.exports = () => {
  const projectFiles = ['tsconfig.json'];

  if (existsSync(process.cwd() + '/tsconfig.base.json')) {
    projectFiles.push('tsconfig.base.json');
  }
  if (existsSync(process.cwd() + '/tsconfig.build.json')) {
    projectFiles.push('tsconfig.build.json');
  }
  if (existsSync(process.cwd() + '/tsconfig.node.json')) {
    projectFiles.push('tsconfig.node.json');
  }
  if (existsSync(process.cwd() + '/tsconfig.test.json')) {
    projectFiles.push('tsconfig.test.json');
  }

  return projectFiles;
};
