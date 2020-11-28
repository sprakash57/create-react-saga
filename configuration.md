## Webpack

Webpack is a static module bundler for Create React Saga. It internally processes your app and builds a dependency graph which maps every module your project needs and generate one or more bundles. Well this is what webpack documentation says. In simpler terms whatever build files you are going to create is done via webpack configuration. We will see some important sections used in the CLI.

Once you execute the CLI it will generate three webpack files in the root directory namely - `webpack.common.js`, `webpack.dev.js` and `webpack.prod.js`. As the name suggests first one contains all the common configuration between development and production environment. Later ones contain rules specific to the environment. Configuration is nothing but an exported object with some special attributes that you need to take care of. Below are the some important ones -

1. **entry** -
This indicates the path webpack will start building out its dependency graph. This has to be the path to the file from where your react app bootstrap. In Create React Saga you will find `./app/index.js`, this acts as the entry point for the starter application.

2. **module** -
Module contains the rules that explain how webpack is going to load different type of files (js, ts, css, png, ttf and svg, etc.) and where to put them once build has been completed. This the place where you define your different loaders.

3. **resolve** -
While importing modules or components you don't need to include `.js` or `.jsx` extension. Resolve takes care of it.

4. **output** -
Output the bundle files to the given directory. You can name the file as per your liking, by default it is `bundle.js`.

5. **plugins** -
Plugins are used to perform a wider range of tasks like bundle optimization, asset management and injection of environment. In the starter kit you will find `html-webpack-plugin` used to generate an HTML file that has all the bundles injected automatically.

6. **devtool** - 
If you want to debug your application in the browser through dev tools. you have to keep this option as `inline-source-map` otherwise you can just ignore the field or kepp it as `hidden-source-map`.

> This is just a glimpse of what you can configure and customize in your Create React Saga with the help of webpack. To know more about webpack and how to cinfigure it please visit their <a href="https://v4.webpack.js.org/concepts/" target="_blank">docs</a>. Currently `create-react-saga` is using wepack v4. Migration to v5 is under development. It will be live soon.

## Babel
Babel is included to let user use the latest features of EcmaScript and intorduce polyfils to run the application on various browsers. In the root directory you will find `.babelrc` file that contains bable presets and plugins. babel preset is collection of plugins for behaving cohesively. For example `@babel/preset-react` contains below plugins -
- @babel/plugin-syntax-jsx
- @babel/plugin-transform-react-jsx
- @babel/plugin-transform-react-display-name

If you need standalone plugins you can add it to the list.

```
"plugins": [
    ...
]
```
Create React Saga already include the plugin like `@babel/plugin-proposal-class-properties` to use class properties, in case you opt to write class components. `@babel/plugin-transform-runtime` has been used to support generator functions used while writing sagas.