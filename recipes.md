## Adding Bootstrap

Bootstrap is the most easy-to-go and popular UI toolkit. If you want to quickly get started with styling of your app with minimal hassle then Bootstrap should be in your tech stack. Even better you can use component libraries wrapped around it. Like <a href="https://react-bootstrap.netlify.app/" target="_blank">React Bootstrap</a> and <a href="https://reactstrap.github.io/" target="_blank">Reactstrap</a>. Before choosing any of them you might want to include bootstrap in your create-react-saga app:

```
$ npm install bootstrap
```

Then import the `bootstrap.min.css` inside your `src/index.js`

```
import 'bootstrap/dist/css/bootstrap.min.css';
// Include any other css imports below.
```

## Adding Routes

Though Create React Saga provides a easier way to spin up SPA page with almost zero effort, It has few shortcomings too. It does not come with any built-in routing solution. You need to add one by yourself. Take a look at <a href="https://reactrouter.com/web/" target="_blank">React Router</a>. You can easily integrate it with your current app.

```
$ npm install react-router-dom
```

Then replace your `src/App.js` code with the solution provided on their websites.

## Environment variables

From v0.9.2 onwards it is possible to add environment variables. Just add `.env` file to your root directory and place your secrets inside it.

/.env
```
API_URL=https://jsonplaceholder.typicode.com/users
```
Then use `process.env.<variable name>` where you were supposed to use the secret. In this it should look like `process.env.API_URL`

```
const fetchData = (params = { method: 'GET', body: '' }) => {
    const { method, body } = params;
    const options = { method, headers };
    if (method !== 'GET') options.body = body;
    return fetch(process.env.API_URL, options).then(response => response.json());
}
```

Create React Saga also provides a way to use multiple environment variables. Let say you want to maintain your secrets for development and for production at different places. To achieve this we need to utilize the script section of `package.json`. To make things simple for this tutorial I am going to create an env for production. Steps to follow —
1. Your build script inside `package.json` should look like below -
    ```
    "build": "webpack --env ENVIRONMENT=production --config webpack.prod.js",
    ```
    
    Let's break it down. Webpack is taking to flags first is env and second is config. Through env flag we are passing the object `{ ENVIRONMENT: 'production'}` to the config where all the magic happens. Notice the `ENVIRONMENT` keyword that is how create-react-saga detect the environment variables. If you want to rename it then you need to explore `webpack.commn.js`.

2. Create `env.production` in your root directory. `production` here should match the value of `ENVIRONMENT` key as used in the build script.

That's All!! You are done configuring environment variables for production.
 
## TypeScript

It's an open source language which builds on JavaScript. As per <a href="https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-languages-loved" target="_blank">Stackoverflow survey 2020</a>, TypeScript is 2nd most loved programming language.
### Setup

As you can see how popular typescript is, In such a user should have the option to bootstrap their project based on TypeScript as well. Well `v0.9.5` onwards create-react-saga gives you that flexibility. All you need to do is run below command - 

```
$ npx create-react-saga my-awesome-app ts
```

By default, create-react-saga comes with a JavaScript template that can be overridden easily with `ts` flag. Apart from all the files you get from regular setup, you will get two extra addition to the bootstrapped project directory -

1. /types

    Here you can define all the types and mapping files.

2. tsconfig.json

    Out of the box create-react-saga provided the most optimized configuration file you ever need for your react application. However, you can tweak it as per convenience. To know more about I would suggest go through this <a href="https://www.typescriptlang.org/tsconfig" target="_blank">link</a>.

!> If you already have a previous version of `create-react-saga` installed globally. Then I would suggest uninstall that global package with `npm uninstall -g create-react-saga` and then use `npx` command to use it further on.

### Resources

This is not all. If you got the taste of TypeScript, you might want to consider reading below resources to help you with typing and all other good stuffs TypeScript comes with.

- <a href="https://www.typescriptlang.org/docs/handbook/react.html" target="_blank">TypeScript official docs</a>
- <a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank">React + TypeScript Cheatsheets</a>
- <a href="https://www.typescriptlang.org/play?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react" target="_blank">Playground</a>