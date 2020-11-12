<p align="center">
  <a href="https://master.d3knmnietsgia5.amplifyapp.com" target="blank"><img src="./core/assets/wrs.png" width="320" alt="WRSa logo" /></a>
</p>

<h1 align="center">Create React Saga</h1>

`create-react-saga` is a CLI tool for quickly setup your next clutter free webpack backed React application. It provides you latest hooks based codebase, test files and storybooks. If you are thinking of below -
1. Create components ahead of development for early reviews.
2. Want to use Redux-Saga middleware for async calls.
3. Proper testing environment setup for React hooks.
Then you have come to the right place. See the features section for detailed info. 

## 📺 Demo

You can find the live demo of the running boilerplate over [here](https://master.d3knmnietsgia5.amplifyapp.com)

## 💻 Technology Stack

- **React Hooks**
- **Redux-Saga**
- **ES6+**
- **Sass**
- **Webpack**
- **Jest**
- **Enzyme**
- **Storybook.js**
- **Babel**

## 🚀 Features
- Lean and easy to understand webpack configurations for production and development environment.
- In-built Scss support. No need to sweat anymore for modern CSS.
- Unit test included for starter kit code to get you started quickly.
- Functional components and hooks 😍.
- `.babelrc` file provided in case you want to use latest ES6+ features.
- Proper implementation of Redux-Saga for async calls without polluting redux actions.
- Boilerplate code is based on a real-world project done for one of my clients.
- Constant maintenance and package updates.
- Optimized bundle size for production.
- Redux devtool integration with trace enabled.
- Storybook.js to showcase your componet ahead of feature development.

## 📙 Documentation
`npx create-react-saga --help` will show you all available options.
> Detailed version of the documentation is under development.

## How to use?
```
$ npx create-react-app my-first-project
$ cd my-first-project
$ npm start
```
> Open `localhost:3000` in the Browser.
> (npx comes with npm 5.2+ and higher, see instructions for older npm versions)

## Project structure
`create-react-app` will create below project structure -

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

### Production build
    $ npm run build

    > Bundle files can be found in `dist` folder under root directory

### Storybook
    $ npm run storybook

    > Open `localhost:6006` in the Browser.

### License

Create React Saga is open source software [licensed as MIT](https://github.com/facebook/create-react-saga/blob/master/LICENSE). The logo is licensed  under a [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/).
