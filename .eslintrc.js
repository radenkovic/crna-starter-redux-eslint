module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['import', 'jsx-a11y', 'react', 'prettier', 'jest'],
  settings: {
      "import/resolver": {
        "node": {
          "paths": ["src"]
        }
    }
  },
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest/globals": true
  },
  rules: {
    'prettier/prettier': ['error', {
      'singleQuote': true,
    }],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-filename-extension': 0
  }
}