import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'vitest.config.*'],
  },
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    settings: {
      'import/resolver': {
        typescript: {
          project: true,
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      // Let the plugin remove unused imports; keep vars as warnings
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '*.css',
              group: 'index',
              position: 'after',
            },
          ],
        },
      ],
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'error',
      'import/no-unresolved': 'error',
    },
  },

  // Relaxed rules for config files only
  {
    files: ['vitest.config.ts'],
    rules: {
      'import/no-unresolved': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
