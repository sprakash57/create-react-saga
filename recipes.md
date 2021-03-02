## Adding Bootstrap

Bootstrap is most easy-to-go and popular UI toolkit. If you want to quickly get started with styling of your app with minimal hassle then Bootstrap should be in your tech stack. Even better you can use component libraries wrapped around it. Like <a href="https://react-bootstrap.netlify.app/" target="_blank">React Bootstrap</a> and <a href="https://reactstrap.github.io/" target="_blank">Reactstrap</a>. Before choosing any of them you might wanna include bootstrap in your create-react-saga app:

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