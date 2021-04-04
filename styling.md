## Assets

Webpack helps you to import your files, images and fonts easily to your project. All you need to do is put your asset files inside `assets` folder. Currently, Create React Saga supports most common file types such media, assets, fonts and images.

You can add the desired file type under rules in `webpack.common` file. Your code should look like below -

```
rules: [
    { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
    { test: /\.(png|jpe?g|gif|svg|ico)$/, use: [{ loader: 'file-loader?name=assets/[name].[ext]' }] },
    { test: /\.(eot|ttf|wof|wof2)$/, use: [{ loader: 'file-loader?name=/assets/fonts/[name].[ext]' }] }
]
```

If you are building your app and want your assets present in your `dist` folder. You can do so by replacing `name` query into file-loader path `file-loader?name=/assets/fonts/[name].[ext]`

## Styling your app

It is as simple as adding stylesheets for your components or add a single global `.css`. Choice is yours. Below is and example how we generally import `css` files and use it inside components.

```
import './button.css';

export const Button = ({ variant, label, ...props }) => {
  return (
    <button className={`bttn ${variant}`} {...props}>
      {label}
    </button>
  );
};
```

But that's not the limitation, you can add different UI component libraries and toolkit to enhance your designing experience. Such an example is present in [recipes](/recipes) where I have shown how to integrate everyone's favorite `Bootstrap`.