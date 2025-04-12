import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    ...tseslint.configs.recommendedTypeChecked[0],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
      },
    },
    rules: {},
  },

  // Глобальные игнорируемые файлы
  {
    ignores: [
      "node_modules/**",
      "build/**",
      "eslint.config.js", // Игнорируем файл конфигурации ESLint
    ],
  },
];
