### Storybook.js

We strongly believe in segregating components with business logic. That's why Create React Saga comes with [Storybook.js](https://storybook.js.org/) integration. Storybook is an open source tool for developing UI components in isolation. It will keep the components and related documents separately. You can even deploy your docs for better reach for your team members.

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
└── app
    └── components
        └── Button
```

1. `main.js`

This is where you tell storybook to find your stories and what addons you want to include. Yes!! Sotrybook comes with its own add-ons ecosystem. You will find more over [here](https://storybook.js.org/addons/).

```
module.exports = {
  "stories": [
    "../app/components/**/*.stories.mdx",
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ]
}
```

2. `components`

This is where you code your components and write stories. `Stories` are the way your component will present in the isolation. You can refer `Button` story already present in your Create React Saga app.

### What if i want to remove it?

Currently Storybook comes out of the box with Create React Saga. So there isn't a way to opt out. Although, in the next release storybook is going to be optional. However if you want to remove it from your bootstrapped project, please see the support section.