module.exports = {
    parser: '@babel/eslint-parser',
    extends: [
      'plugin:react/recommended',
      'next/core-web-vitals'
    ],
    plugins: ['react', 'react-hooks'],
    env: {
      browser: true,
      node: true,
      es2021: true
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module',
      requireConfigFile: false // Needed for @babel/eslint-parser
    },
    rules: {
      // Add any custom rules here
    }
  };
  