module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'printWidth': 100,
        'tabWidth': 2,
        'useTabs': false,
        'semi': false,
        'singleQuote': true,
        "react/prop-types": "off",
        'trailingComma': 'none',
        'quoteProps': 'as-needed',
        'bracketSpacing': true,
        'arrowParens': 'avoid',
        'no-duplicate-variable': [true, 'check-parameters'],
        'no-var-keyword': true,
        'endOfLine': 'lf',
      },
    ],
    quotes: [0, "double"],
    "jsx-quotes": [2, 'prefer-single'],
    "react/react-in-jsx-scope": 0
  },
};
