### Jest

Unit testing is an important aspect of software development. That's why Create React Saga comes with a built-in testing environment using <a href="https://jestjs.io/docs/en/getting-started" target="_blank">Jest</a>. It is a node-based test runner used by major projects. The main purpose of using Jest is to test your functional logic and your components.

### Configuration

Create React Saga comes with already configured Jest. You can find the configuration file named as `jest.config.js` at root level.

```
module.exports = {
    "moduleFileExtensions": [
      "js",
      "jsx"
    ],
    "moduleNameMapper": {
      "\\.(svg|jpeg|jpg|png|ico)$": "<rootDir>/app/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "<rootDir>/app/__mocks__/styleMock.js"
    },
    "setupFilesAfterEnv": [
      "<rootDir>/setupTests.js"
    ],
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ]
  }
```

Let's talk about the above sample configuration first -
- `moduleFileExtensions` will check for files with `js` and `jsx` extensions for testing.
- `moduleNameMapper` will use directed files when jest will find anything other than js and jsx. That means you are mocking non-javaScript files.
- `setupFilesAfterEnv` will provide the global variables for jest. This is where you should setup your `enzyme` modules.
- `snapshotSerializers` is the best way to do snapshot testing of functional components.

> If you have lot less of configuration for jest in your project you can actually remove the `jest.config.js` file and the configuration in package.json under `jest` property.

### Scripts

1. `npm test`

You can run all your test cases using `npm test` command. Jest will print below message in your terminal.

```
 PASS  app/__tests__/actions.spec.js
 PASS  app/__tests__/sagas.spec.js
```

If you want to run test cases for a specific file you can do so by putting the file name at the end of the command. Eg:- `npm test dummy.spec.js`

2. `npm run test-cov`

This will also run all the test cases plus it will give you a summary of test results in a tabular format. This will be available in your console. You can fine grain your coverage configuration as well. That means you can tell jest which files to consider for coverage report. Use the flag `--collectCoverageFrom=<glob>` inside your jest configuration.

```
"collectCoverageFrom": ["app/**/*.{js, jsx}"],
```

### Filename extension

Jest will run test cases for any file with extension `.test.js` or `.spec.js`. You can put all your test cases in the folder `__tests__` at any level inside `app` directory. Or you can put test files with its component. Choice is up to you.