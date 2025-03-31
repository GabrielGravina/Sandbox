import { FlatCompat } from '@eslint/eslintrc';
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});
const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    plugins: ['import-newlines'],

    rules: {
      semi: ["error"],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      "object-curly-newline": ["error", { "multiline": true }],
      "object-curly-spacing": ["error", "always"],
      'import-newlines/enforce': 'error',

      'react/jsx-indent-props': ['error', 2], // Indentação de 2 espaços para props
      'react/jsx-indent': ['error', 2], // Indentação geral de 2 espaços para JSX

      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-wrap-multilines': 'error',
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-max-props-per-line': ['error', { maximum: 2, when: 'multiline' }]

    },
    settings: { next: { rootDir: 'packages/my-app/', }, },
  }),
];
export default eslintConfig;