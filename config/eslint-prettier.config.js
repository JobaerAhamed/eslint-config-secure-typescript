const { existsSync } = require("fs");

module.exports = () => {
  let rules = {
    singleQuote: true,
  };

  if (existsSync(process.cwd() + "/.prettierrc.js")) {
    rules = require(process.cwd() + "/.prettierrc.js");
  }

  return {
    "prettier/prettier": ["error", rules],
  };
};
