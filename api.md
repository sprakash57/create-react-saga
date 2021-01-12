## Fetch Data

If you are going to leverage Redux-Saga for your asynchronous calls, you should check out `fetchData.js`. Create-React-Saga uses it at the core for all external API calls. Of course this is built upon Browser's `fetch API`.

## Redux-Saga

<a href="https://redux-saga.js.org/" target="_blank">Redux Saga</a> is being used as a Redux middleware in Create React Saga. The real reason to opt Saga over thunk is the cleanliness, pure and untouched actions and proper code structure. You simply put your API logic in one place and keep your actions out of async/await (or then, catch) hell. That leads to easy unit testing and easier to understand code. However, all these come with some steeper learning curve.

All the reducers and sagas can be found in their respective directories in the bootstrapped application.

## API Proxy

If you want to hit an API with only this `fetch(/api/users)` or `fetch(/v1/users)`, you can do that without worrying about redirecting them to another host or port during development. All you need to do, is to tell Development server of your Create React Saga app to proxy any unknown requests to your development API service. To achieve that just add `proxy` field to your `package.json`.

```
"proxy": "http://localhost:3000",
```

Now if you will hit the service `fetch(/api/users)` in development, API development server will get the proxy request like this `http://localhost:3000/api/users`. This will help you to avoid `CORS` issue.

> Please note that `proxy` will only work in development environment.