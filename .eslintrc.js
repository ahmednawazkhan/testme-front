module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'ignores': []
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
