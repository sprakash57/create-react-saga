## Adding Bootstrap

Bootstrap is the most easy-to-go and popular UI toolkit. If you want to quickly get started with styling of your app with minimal hassle then Bootstrap should be in your tech stack. Even better you can use component libraries wrapped around it. Like <a href="https://react-bootstrap.netlify.app/" target="_blank">React Bootstrap</a> and <a href="https://reactstrap.github.io/" target="_blank">Reactstrap</a>. Before choosing any of them you might want to include bootstrap in your create-react-saga app:

```
npm install bootstrap
```

Then import the `bootstrap.min.css` inside your `src/index.js`

```
import 'bootstrap/dist/css/bootstrap.min.css';
// Include any other css imports below.
```

## Adding Routes

Though Create React Saga provides a easier way to spin up SPA page with almost zero effort, It has few shortcomings too. It does not come with any built-in routing solution. You need to add one by yourself. Take a look at <a href="https://reactrouter.com/web/" target="_blank">React Router</a>. You can easily integrate it with your current app.

```
npm install react-router-dom
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