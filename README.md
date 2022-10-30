## What is Create React Saga?

`create-react-saga` is a CLI tool for quickly set up your next clutter-free webpack backed React application. It provides you the latest hooks based codebase, testing utilities and storybooks. So if you are thinking of below -

1. Create components ahead of development for early reviews.
2. Want to use state management but afraid of hooking redux with saga for async behaviors 🤯.
3. Proper testing environment setup for React hooks.

Then you have come to the right place. You will get the most vanilla React experience ever without worrying about configuring component creation in isolation, unit testing and API integration. See the features section for detailed info.

## Features

- Written in React 18 with hooks and functional components. Easy to clean bootstrapped codebase with minimal number of dependencies.
- Latest and greatest **Webpack 5**. Configurations included for production and development environments.
- Environment variables support to keep your secrets hidden.
- JavaScript and TypeScript templates to choose from.
- Less boilerplate code for state manamgement through `@reduxjs/toolkit` 💪.
- Redux-Saga for async calls without polluting redux actions.
- Redux devtool integration with trace enabled. Download browser extension to track saga calls. For example for Google Chrome you can find it over <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank">here</a>.
- Storybook.js to showcase your component ahead of feature development.
- <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">React Testing Library </a> configured for unit testing with example test cases.

## Prerequisites

You should have node.js version 12+ installed on your local machine. Visit <a href="https://nodejs.org/en/download/" target="_blank">here</a> and download if you haven't done so. Run below command to check the installed version.

```
$ node -v
```

## Quick Setup

```
$ npx create-react-saga my-first-project
$ cd my-first-project
$ npm start
```

Open <u>http://localhost:3000</u> to see the app running.

!> npm 5.2+ version is required for npx to work.

## Project structure

Running `npx create-react-saga my-first-project` will create below project structure -

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

## Libraries

Before you start developing your awesome app, you should be aware of tech and tools comes with Create React Saga. So that you can quickly start implementing your business logic without wasting any moment in configuration and installation of npm libraries. Below packages, you get out of the box.

- **React 18**
- **@reduxjs/toolkit**
- **Redux-Saga**
- **Webpack 5**
- **Storybook.js**
- **Jest**
- **React Testing Library**

## Scripts

### npx create-react-saga --help

It will show you all the available options comes with Create React Saga

<p><img src="https://i.ibb.co/hF6VSDX/Screenshot-2022-02-27-221909.png" alt="help" border="0"/></p>

### npm start

This will launch your application in development environment.

### npm run build

Once you are done with your development, and now you want to build your app. This command does just that. Once you run the command, you will find a directory under the root folder named as `dist`. It will contain the bundles and `index.html` files ready to be deployed.

### npm test

Create React Saga already has a prototype app built-in with proper unit test cases. Running the command will execute all the test cases present under `__tests__` directory or any file with `.test.js`/`.spec.js` extension.

### npm run storybook

Stories can be found running on <u>http://localhost:6006</u> in the Browser. You can interact with your components without any hassle.

## Donate

Create React Saga is an open-source project that I created to help myslef with some ready-to-use starter code. Then I published this CLI tool to help others as well. It takes lot of effort and time to add new features, provide support and maintain at the same time. Please consider donating if you think Create React Saga is helpful to you in any way. I would be happy if you can -

Show ❤️ by starring this repo.

<a href="https://www.buymeacoffee.com/sunnyprakash" target="_blank" rel="noreferrer noopener">
    <img  src="https://cdn.buymeacoffee.com/buttons/default-red.png"  alt="Buy Me A Coffee"  height="30"  width="150">
</a>

<br>

<a href="https://www.paypal.me/sprakash57" target="_blank" rel="noreferrer noopener">
    <img src="https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white" alt="Paypal" height="30">
</a>

## License

Create React Saga is open source software licensed under <a href="https://github.com/sprakash57/create-react-saga/blob/master/LICENSE" target="_blank">MIT</a>. The logo is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International license</a>.
