### Storybook.js

We strongly believe in segregating components with business logic. That's why Create React Saga comes with <a href="https://storybook.js.org/" target="_blank">Storybook.js</a> integration. Storybook is an open source tool for developing UI components in isolation. It will keep the components and related documents separately. You can even deploy your docs for better reach for your team members.

### How to get started?

You just need to run below command. Storybook will run on http://localhost:6006.

```
$ npm run storybook
```

### Configure your Storybook

Inside root directory you will find below -

```
your-project
├── .storybook
│   ├── main.js
│   └── preview.js
└── src
    └── components
        └── Button
```

1. `main.js`

This is where you tell Storybook to find your stories and what add-ons you want to include. Yes!! Storybook comes with its own add-ons ecosystem. You will find more over <a href="https://storybook.js.org/addons/" target="_blank">here</a>.

```
module.exports = {
  "stories": ["../src/components/**/*.stories.mdx", "../src/components/**/*.stories.@(ts|tsx)"],
  "addons": ["@storybook/addon-essentials"],
  core: {
    builder: "webpack5"
  }
};
```

2. `components`

This is where you code your components and write stories. `Stories` are the way your component will present in the isolation. You can refer `Button` story already present in your Create React Saga app.

### What if I want to remove it?

Currently, Storybook comes out of the box with Create React Saga. So there isn't a way to opt out. In the next release storybook is going to be optional. However, if you want to remove it from your bootstrapped project, please see the [support](/support) section.
