## What is Create React Saga?

`create-react-saga` is a CLI tool for quickly setup your next clutter free webpack backed React application. It provides you latest hooks based codebase, testing utilities and storybooks. So if you are thinking of below -
1. Create components ahead of development for early reviews.
2. Want to use Redux-Saga middleware for async calls.
3. Proper testing environment setup for React hooks.

Then you have come to the right place. You will get most vanilla React experience ever without worrying about configuring component creation in isolation, unit testing and api integration. See the features section for detailed info.

## Features
- Lean and easy to understand webpack configurations for production and development environment.
- Built-in Scss support. No need to sweat anymore over modern CSS.
- Unit test utilities and example included for starter kit code to get you up to speed without wasting any time.
- Functional component has been used in the entire place. No more old `class`.
- `.babelrc` file provided in case you want to use latest ES6+ features.
- Proper implementation of Redux-Saga for async calls without polluting redux actions. Thanks to [jsonplaceholder](https://jsonplaceholder.typicode.com) for its API service.
- Constant maintenance and package updates.
- Optimized bundle size for production.
- Redux devtool integration with trace enabled. Download [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) extenstion to track saga calls.
- Storybook.js to showcase your componet ahead of feature development.

## Prerequisites
You should have node.js version 10+ installed on your local machine. Visit https://nodejs.org if you haven't done so. Run below command to check the installed version

```
$ node -v
```
## Quick Setup
```
$ npx create-react-saga my-first-project
$ cd my-first-project
$ npm start
```
Open [localhost:3000](http://localhost:3000) to see the app running.

> npm 5.2+ version is required for npx to work.

## Libraries

Before you start developing your awesome app, you should be aware of tech and tools comes with Create React Saga. So that you can quickly start implementing your business logic without wasting any moment in configuration and installation of npm libraries. Below packages you get out of the box.

- **React hooks**
- **Redux-Saga**
- **ES6+**
- **Sass**
- **Webpack**
- **Jest**
- **Enzyme**
- **Storybook.js**
- **Babel**

## Scripts

### `npx create-react-saga --help`
It will show you all the available options comes with Create React Saga

<p><img src="https://cdn.jsdelivr.net/npm/create-react-saga@0.7.7/images/help.png" alt="help"/></p>

### `npx create-react-saga --git`
Getting your starter kit comes with initialized git repo. You just need to provide the `--git` flag. If you want to skip the git initialization, don't include the flag and you are good to go.

### `npm build`
Once you are done with your development and now you want to build your app. This command do just that. Once you run the command, you will find a directory under root folder named as `dist`. It will contain the bundles and `index.html` files ready to be deployed.

### `npm test`
Create React Saga has already prototype app built-in with proper unit test cases. Running the command will execute all the test cases present under `__tests__` directory or any file with `.test.js`/`.spec.js` extension.

### `npm run storybook`
Stories can be found running on [localhost:6006](http://localhost:6006) in the Browser. You can interact with your components without any hassle.

## Project structure
Running `npx create-react-saga my-first-project --git` will create below project structure -

```
my-first-project
├── .storybook
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── .babelrc
├── setupTests.js
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
## License

Create React Saga is open source software [licensed as MIT](https://github.com/sprakash57/create-react-saga/blob/master/LICENSE). The logo is licensed  under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
