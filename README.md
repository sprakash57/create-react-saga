## What is Create React Saga?

`create-react-saga` is a CLI tool for quickly set up your next clutter-free webpack backed React application. It provides you the latest hooks based codebase, testing utilities and storybooks. So if you are thinking of below -
1. Create components ahead of development for early reviews.
2. Want to use Redux-Saga middleware for async calls.
3. Proper testing environment setup for React hooks.

Then you have come to the right place. You will get the most vanilla React experience ever without worrying about configuring component creation in isolation, unit testing and API integration. See the features section for detailed info.

## Features
- Written in React 17 with hooks and functional components. Easy to clean bootstrapped codebase with minimal number of dependencies.
- Latest and greatest Webpack 5. Configurations included for production and development environments.
- Environment variables support for your secrets.
- React Testing Library configured for unit testing with example test cases.
- `.babelrc` file provided in case you want to use latest ES6+ features.
- Proper implementation of Redux-Saga for async calls without polluting redux actions. Thanks to <a href="https://jsonplaceholder.typicode.com" target="_blank">jsonplaceholder</a> for awesome APIs.
- Constant maintenance and package updates.
- Optimized bundle size for production.
- Redux devtool integration with trace enabled. Download <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank">redux-devtools</a> extension to track saga calls.
- Storybook.js to showcase your component ahead of feature development.

## Prerequisites
You should have node.js version 10+ installed on your local machine. Visit <a href="https://nodejs.org/en/download/" target="_blank">here</a> and download if you haven't done so. Run below command to check the installed version.

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
├── README.md
├── jest.config.js
├── node_modules
├── package.json
├── .gitignore
├── assets
│   ├── favicon.ico
│   └── wrs.png
└── src
    ├── __mocks__
    ├── __tests__
    ├── actions
    ├── common
    ├── components
    ├── libs
    ├── reducers
    ├── sagas
    ├── App.js
    ├── constants.js
    ├── index.html
    ├── index.js
    └── index.scss
```

## Libraries

Before you start developing your awesome app, you should be aware of tech and tools comes with Create React Saga. So that you can quickly start implementing your business logic without wasting any moment in configuration and installation of npm libraries. Below packages, you get out of the box.

- **React v17+**
- **Redux-Saga**
- **Webpack v5**
- **ES6+**
- **Jest**
- **React Testing Library**
- **Storybook.js**
- **Babel**

## Scripts

### npx create-react-saga --help
It will show you all the available options comes with Create React Saga

<p><img src="https://i.ibb.co/WtWcdZf/help.png" alt="help" border="0"/></p>

### npm start
This will launch your application in development environment.
### npm run build
Once you are done with your development, and now you want to build your app. This command does just that. Once you run the command, you will find a directory under the root folder named as `dist`. It will contain the bundles and `index.html` files ready to be deployed.

### npm test
Create React Saga already has a prototype app built-in with proper unit test cases. Running the command will execute all the test cases present under `__tests__` directory or any file with `.test.js`/`.spec.js` extension.

### npm run storybook
Stories can be found running on <u>http://localhost:6006</u> in the Browser. You can interact with your components without any hassle.
## License

Create React Saga is open source software licensed under <a href="https://github.com/sprakash57/create-react-saga/blob/master/LICENSE" target="_blank">MIT</a>. The logo is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International license</a>.
