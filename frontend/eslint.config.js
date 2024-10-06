import config from '../eslint.config.js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
export default tseslint.config(
  ...config,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['src/**/*.{vue,ts}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        project: './frontend/tsconfig.app.json',
        extraFileExtensions: ['.vue', '.ts'],
        sourceType: 'module',
      },
    },
  },
);
