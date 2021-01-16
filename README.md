<p align="center">
  <a href="https://master.d3knmnietsgia5.amplifyapp.com" target="blank"><img src="https://cdn.jsdelivr.net/npm/create-react-saga@0.7.7/core/assets/wrs.png" width="320" alt="WRSa logo" /></a>
</p>

<h1 align="center">Create React Saga</h1>

[![NPM](https://img.shields.io/npm/v/create-react-saga.svg)](https://www.npmjs.com/package/create-react-saga)

`create-react-saga` is a CLI tool for quickly setup your next clutter free webpack backed React application. It provides you the latest hooks based codebase, testing utilities and storybooks. So if you are thinking of below -
1. Create components ahead of development for early reviews.
2. Want to use Redux-Saga middleware for async calls.
3. Proper testing environment setup for React hooks.

Then you have come to the right place. You will get the most vanilla React experience ever. See the features section for detailed info. 

## 📺 Demo

You can find the live demo of the running boilerplate over [here](https://live.d3knmnietsgia5.amplifyapp.com/)

## 🚀 Features
- Lean and easy to understand webpack configurations for production and development environment.
- Built-in Scss support. No need to sweat anymore over modern CSS.
- Unit test utilities and example included for starter kit code to get you up to speed without wasting any time.
- Functional component has been used in the entire place. No more old `class`.
- `.babelrc` file provided in case you want to use latest ES6+ features.
- Proper implementation of Redux-Saga for async calls without polluting redux actions. Thanks to [JSON placeholder](https://jsonplaceholder.typicode.com/) for their open source API.
- Constant maintenance and package updates.
- Optimized bundle size for production.
- Redux devtool integration with trace enabled. Download [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) extenstion to track saga calls.
- Storybook.js to showcase your componet ahead of feature development.

## 💻 Technology Stack

- **React hooks**
- **Redux-Saga**
- **ES6+**
- **Sass**
- **Webpack**
- **Jest**
- **Enzyme**
- **Storybook.js**
- **Babel**

## 📙 Documentation
`npx create-react-saga --help` will show you all available options.

<p><img src="https://cdn.jsdelivr.net/npm/create-react-saga@0.7.7/images/help.png" alt="help"/></p>

> Detailed version of the documentation can be found over [here](https://sprakash57.github.io/create-react-saga)

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
│   ├── favicon.ico
│   └── wrs.png
└── app
    ├── __mocks__
    ├── __tests__
    ├── actions
    ├── common
    ├── components
    ├── libs
    └── reducers
    ├── sagas
    ├── App.js
    ├── constants.js
    ├── index.html
    ├── index.js
    └── index.scss
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

## 📑 License

Create React Saga is open source software [licensed as MIT](https://github.com/sprakash57/create-react-saga/blob/master/LICENSE). The logo is licensed  under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
