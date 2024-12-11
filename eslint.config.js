import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import * as tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactCompiler from 'eslint-plugin-react-compiler';
export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    plugins: {
      'typescript-eslint': tseslint.plugin,
    },
  },
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react-compiler/react-compiler': 'error'
    },
  },
  eslintConfigPrettier,
);