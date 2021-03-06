## Files, Images and Fonts

Webpack helps you to import your files, images and fonts easily to your project. All you need to do is put your asset files inside `assets` folder. Currently, Create React Saga supports most common file types -

1. Files - .css, .scss, .js, .jsx
2. Images - .png, .jpeg, .jpg, .gif, .svg, .ico
3. Fonts - .eot, .ttf, .wof, .wof2

But this is not the limitation. You can add the desired file type under rules in `webpack.common` file. Your code should look like below -

```
rules: [
    { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    { test: /\.(png|jpe?g|gif|svg|ico)$/, use: [{ loader: 'file-loader?name=assets/[name].[ext]' }] },
    { test: /\.(eot|ttf|wof|wof2)$/, use: [{ loader: 'file-loader?name=/assets/fonts/[name].[ext]' }] }
]
```

If you are building your app and want your assets present in your `dist` folder. You can do so by replacing `name` query into file-loader path `file-loader?name=/assets/fonts/[name].[ext]`

## Styling your app

Create React Saga comes with <a href="https://sass-lang.com/guide" target="_blank">SCSS</a> support. So that you can use mixins, nested properties, variables and a lot more, right from the start. You just need to import proper `.scss` file and all done. Webpack will take care of minifying all your stylesheets.

```
import './button.scss';

export const Button = ({ variant, label, ...props }) => {
  return (
    <button className={`bttn ${variant}`} {...props}>
      {label}
    </button>
  );
};
```

!! Currently, SCSS support is limited to application. If you opt to use storybook in your project, then you will have to stick with `css` for stories. Read more about the <a href="https://github.com/sprakash57/create-react-saga/issues/17" target="_blank">issue</a>