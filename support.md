### How to remove storybook?

Follow below steps -
1. Delete `.storybook` folder.
2. Delete all the `*.stories.*` files.
3. Delete storybook related scripts from `package.json`.
4. Uninstall storybook realted packages and addons from your project.
5. Run `npm install`. Do not run `npm update`.

For more details visit this <a href="https://github.com/storybookjs/storybook/issues/979" target="_blank">github issue</a>.