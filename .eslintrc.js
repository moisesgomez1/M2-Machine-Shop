module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: ['warn', 2],
    'no-unused-vars': ['off', { vars: 'local' }],
    'no-case-declarations': 'off',
    'prefer-const': 'warn',
    quotes: ['warn', 'single'],
    'react/prop-types': 'off',
    semi: ['warn', 'always'],
    'space-infix-ops': 'warn'
  }
};
