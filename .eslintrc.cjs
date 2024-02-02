module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "quotes": ["error", "double", { allowTemplateLiterals: true }],
    "prefer-const": ["error", { destructuring: "all" }],
    "quote-props": ["error", "as-needed", { unnecessary: false }],
    "prefer-arrow-callback": "off",
    "indent": ["error", 2],
    "react/prop-types": ["error", { ignore: ["prop2"] }],
  },
};
