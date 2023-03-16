const rulesDirPlugin = require('eslint-plugin-rulesdir');
rulesDirPlugin.RULES_DIR = 'lib/rules';

module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ["rulesdir"],
  extends: [
    "eslint:recommended",
    "prettier"
  ],
  parserOptions: {
    "ecmaVersion": 12,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
  },
  rules: {
    "rulesdir/no-multiple-classes-in-same-line": "error"
  },
}