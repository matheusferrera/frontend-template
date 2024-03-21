module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: "*.json",
      parser: "jsonc-eslint-parser",
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "simple-import-sort"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^react"], ["^antd"], ["^@?\\w"], ["@/(.*)"], ["^[./]"]],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["**/*.md"],
};
