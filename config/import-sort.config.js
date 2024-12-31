module.exports = () => ({
  "perfectionist/sort-imports": [
    "error",
    {
      type: "alphabetical",
      order: "asc",
      ignoreCase: true,
      specialCharacters: "keep",
      internalPattern: ["^~/.+", "@fieldnation/.+", "@"],
      partitionByComment: true,
      partitionByNewLine: false,
      newlinesBetween: "always",
      maxLineLength: undefined,
      groups: [
        "type",
        ["builtin", "external"],
        "internal-type",
        "internal",
        ["parent-type", "sibling-type", "index-type"],
        ["parent", "sibling", "index"],
        "object",
        "unknown",
      ],
      customGroups: { type: {}, value: {} },
      environment: "node",
    },
  ],
  "perfectionist/sort-named-imports": [
    "error",
    {
      type: "line-length",
      order: "asc",
      ignoreAlias: false,
      ignoreCase: true,
      specialCharacters: "keep",
      groupKind: "mixed",
      partitionByNewLine: false,
      partitionByComment: false,
    },
  ],
  "perfectionist/sort-named-exports": [
    1,
    { order: "asc", type: "line-length" },
  ],
  "perfectionist/sort-jsx-props": [
    "error",
    {
      type: "line-length",
      order: "asc",
      ignoreCase: true,
      specialCharacters: "keep",
    },
  ],
});
