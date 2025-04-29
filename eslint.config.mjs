// @ts-check
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: "."
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      prettier,
    },
    rules: {
      ...ts.configs.recommended.rules,
      "no-undef":"off",
      "no-unused-vars":"off"
    },
  },
  prettier,
];
