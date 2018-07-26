# React PDV

React component library for point of sale

## Contributing

```shell
git clone https://github.com/vicentedealencar/react-pdv
cd react-pdv
yarn

# on different terminals
yarn build:watch
yarn start:library
yarn test:watch
```

### Linking

***

[Sadly](https://github.com/yarnpkg/yarn/issues/2611), for this to work your package needs to be registered on npm, so you must publish at least one version (even if it's a dummy one) before attempting this.

***

For example, if I'm developing the library `my-lib` (this correspond to the `name` attribute of the `package.json` file), I could do this:

- In the library directory:

  ```shell
  $ yarn link
  $ yarn start # Starts the dev mode to make some changes later
  ```

- In the project directory:

  ```shell
  $ yarn link my-lib
  $ yarn add my-lib # If the library is not declared as a dependency yet.
  ```

Now the app can `import 'my-lib'` and any local changes on the library `dist` will be reflected on the app as well.

When you're done run `yarn unlink` on the library folder.

[More information on the Yarn Docs](https://yarnpkg.com/en/docs/cli/link)

### Publishing

Use the standard `yarn publish` command to release a new version of your library. This will ask you the new version to release, commit the new `package.json` version and create a tag.

## License

MIT © [Vicente de Alencar](https://github.com/vicentedealencar)
