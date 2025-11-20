import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "node_modules", "build", "dist-ssr", "*.local"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": "error",
      curly: ["error", "all"],
      "no-console": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_|^args$" }],
      "react-refresh/only-export-components": "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^node:"],
            ["^react$", "^@?\\w"],
            ["^@app/"],
            ["^@assets/"],
            ["^@pages/"],
            ["^@widgets/"],
            ["^@shared/"],
            ["^\\u0000"],
            ["^\\."],
            ["^.+\\.css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "import/first": "error",
    },
  },
]);
