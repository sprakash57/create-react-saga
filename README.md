<p align="center">
  <a href="https://master.d3knmnietsgia5.amplifyapp.com" target="_blank">
  <img src="https://cdn.jsdelivr.net/npm/create-react-saga@0.7.7/core/assets/wrs.png" width="320" alt="create-react-saga" />
  </a>
</p>

<h1 align="center">Create React Saga</h1>

[![NPM](https://img.shields.io/npm/v/create-react-saga.svg)](https://www.npmjs.com/package/create-react-saga)
[![Downloads](https://img.shields.io/npm/dt/create-react-saga)](https://www.npmjs.com/package/create-react-saga)
[![MadeWithReactJs.com shield](https://madewithreactjs.com/storage/repo-shields/2824-shield.svg)](https://madewithreactjs.com/p/create-react-saga/shield-link)

`create-react-saga` is a CLI tool for quickly setup your next clutter-free webpack backed React application. It provides you the latest hooks based codebase, testing utilities and storybooks. So if you are thinking of below -

1. Create components ahead of development for early reviews.
2. Want to use Redux-Saga middleware for async calls.
3. Proper testing environment setup for React hooks.

Then you have come to the right place. You will get the most vanilla React experience ever. See the features section for detailed info.

## 📺 Demo

You can find the live demo of the running boilerplate over <a href="https://create-react-saga.netlify.app/" target="_blank">here</a>

## 🚀 Features

- Written in React 18 with hooks and functional components. Easy to clean bootstrapped codebase with minimal number of dependencies.
- Latest and greatest **Webpack 5**. Configurations included for production and development environments.
- Environment variables support to keep your secrets hidden.
- JavaScript and TypeScript templates to choose from.
- Less boilerplate code for state manamgement through `@reduxjs/toolkit` 💪.
- Redux-Saga for async calls without polluting redux actions.
- Redux devtool integration with trace enabled. Download browser extension to track saga calls. For example for Google Chrome you can find it over <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank">here</a>.
- Storybook.js to showcase your component ahead of feature development.
- <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">React Testing Library </a> configured for unit testing with example test cases.

## 💻 Technology Stack

- **React 18**
- **@reduxjs/toolkit**
- **Redux-Saga**
- **Webpack 5**
- **Storybook.js**
- **Jest**
- **React Testing Library**

## 📙 Documentation

`npx create-react-saga --help` will show you all available options.

<p><img src="https://i.ibb.co/hF6VSDX/Screenshot-2022-02-27-221909.png" alt="help" border="0"/></p>

> Detailed version of the documentation can be found over <a href="https://sprakash57.github.io/create-react-saga" target="_blank">here</a>

## 🤔 How to use?

```
$ npx create-react-saga my-first-project
$ cd my-first-project
$ npm start
```

Open [localhost:3000](http://localhost:3000) in the Browser.

> npm 5.2+ version is required for npx to work.

## 🌲 Project structure

`create-react-saga` will create below project structure -

```
my-first-project
├── .storybook
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── .babelrc
├── setupTests.js
├── jest.config.js
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── assets
└── src
    ├── __mocks__
    ├── components
    ├── utils
    ├── store
    ├── types
    ├── hooks
    ├── App.ts
    ├── index.html
    ├── index.tsx
    └── index.css
```

## ✔ Production build

```
$ npm run build
```

Bundle files can be found in `dist` folder under root directory

## 📚 Storybook

```
$ npm run storybook
```

Open [localhost:6006](http://localhost:6006) in the Browser.

## Donate

Create React Saga is an open-source project that I created to help myslef with some ready to use starter code. Then I published this CLI tool to help others as well. It takes lot of effort and time to add new features, provide support and maintain at the same time. Please consider donating if you think Create React Saga is helpful to you ub any way. I would be happy if you can -

Show ❤️ by starring this repo.

<a href="https://www.buymeacoffee.com/sunnyprakash" target="_blank" rel="noreferrer noopener">
    <img  src="https://cdn.buymeacoffee.com/buttons/default-red.png"  alt="Buy Me A Coffee"  height="30"  width="150">
</a>

<br>

<a href="https://www.paypal.me/sprakash57" target="_blank" rel="noreferrer noopener">
    <img src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white" alt="Paypal" height="30">
</a>

## 📑 License

Create React Saga is open source software [licensed as MIT](https://github.com/sprakash57/create-react-saga/blob/master/LICENSE). The logo is licensed under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
