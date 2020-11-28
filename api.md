## Fetch Data

Create React Saga at the core uses `fetchData.js` at the core for all external api calls. That is built upon Browser's `fetch API`.

## Redux-Saga

<a href="https://redux-saga.js.org/" target="_blank">Redux Saga</a> is being used as a Redux middleware in Create React Saga. The real reason to opt Saga over thunk is the cleanliness, pure and untouched actions and proper code structure. You simply put your API logic in one place and keep your actions out of async/await (or then, catch) hell. That leads to easy unit testing and easier to understand code. However all these come with some steeper learning curve.

All the reducers and sagas can be found in their respective directories in the bootstrapped application.

## API Proxy

If you are running your services locally at some port and you want to hit them