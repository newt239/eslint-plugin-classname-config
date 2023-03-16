const rule = require("./lib/rules/no-multiple-classes-in-same-line");

const plugin = {
  rules: {
    "no-multiple-classes-in-same-line": rule,
  },
};

module.exports = plugin;
