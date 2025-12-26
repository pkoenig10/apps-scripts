import { defineConfig } from "eslint/config";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import gitignore from "eslint-config-flat-gitignore";

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  gitignore(),
]);
