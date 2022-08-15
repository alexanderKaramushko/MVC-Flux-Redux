const config = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'lines-between-class-members': ['error', 'always', {
      exceptAfterSingleLine: true
    }],
    'padded-blocks': ['error', {
      classes: 'always'
    }],
    'no-unused-vars': ['error', {
      args: 'after-used', vars: 'all', ignoreRestSiblings: false
    }],
    'implicit-arrow-linebreak': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      json: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', {
      code: 120,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
    'no-console': 'off',
    'no-debugger': 'error',
    'no-multiple-empty-lines': ['error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
    }],
    quotes: ['error', 'single'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx',],
    }],
    'react/prop-types': 'off',
    'sort-keys': ['error', 'asc', {
      caseSensitive: true,
      natural: false,
    }],
    'object-curly-newline': ['error', {
      ObjectPattern: {
        multiline: true
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline: true,
        minProperties: 3
      },
    }],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'prefer-const': 'off'
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.json'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.json'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};

module.exports = config;
