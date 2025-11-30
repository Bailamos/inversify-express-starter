import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticJs from '@stylistic/eslint-plugin-js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['**/dist/']),
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: ['dist/**/*'],
    rules: {
      indent: ['error', 2],
      '@stylistic/js/semi': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    languageOptions: {
      globals: globals.node
    }
  },
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended
]);
