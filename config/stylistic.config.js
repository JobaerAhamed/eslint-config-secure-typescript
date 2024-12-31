module.exports = () => ({
  "@stylistic/member-delimiter-style": [
    "error",
    {
      multiline: {
        delimiter: "semi",
        requireLast: true,
      },

      singleline: {
        delimiter: "semi",
        requireLast: false,
      },
    },
  ],
  "@stylistic/keyword-spacing": "error",
  "@stylistic/type-annotation-spacing": "error",
  "@stylistic/quotes": [
    "error",
    "single",
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
  "@stylistic/semi": ["error", "always"],
});
