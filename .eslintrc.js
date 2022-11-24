module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true
      }
    ],
    'arrow-body-style': 'warn',
    'object-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'implicit-arrow-linebreak': 'off'
  }
}
