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
      'vue/html-self-closing': 'off',
    },
  },
);
