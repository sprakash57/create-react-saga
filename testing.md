### Jest

Unit testing is important aspect of software development. That's why Create React Saga comes with built in testing environment using <a href="https://jestjs.io/docs/en/getting-started" target="_blank">Jest</a>. It is a node-based test runner used by major projects. The main purpose of using Jest is to test your functional logic and your components.

### Script

You can run all your test cases using `npm test` command. Jest will print below message in your terminal

```
 PASS  app/__tests__/actions.spec.js
 PASS  app/__tests__/sagas.spec.js
```

If you want to run test cases for specific file you can do so by putting file name at the end of the command. eg:- `npm test dummy.spec.js`

### Filename extension

Jest will run test cases for any file with extension `.test.js` or `.spec.js`. You can put all your test cases in the folder `__tests__` at any level inside `app` directory. Or you can put test files with its component. Choice is up to you.