const path = require('path');
module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials"
  ]
}