const path = require('path');

module.exports = {
  "stories": ["../src/components/**/*.stories.mdx", "../src/components/**/*.stories.@(js|jsx)"],
  "addons": ["@storybook/addon-essentials"],
  core: {
    builder: "webpack5"
  }
};