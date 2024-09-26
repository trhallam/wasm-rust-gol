# Updated WASM JS Implementation

This project was created using the **webpack-cli**. Some original content was then copied from `./www`.

### Changes:

  - Webpack includes handlers and path aliases for the pages CSS stylesheets.
  - Moved JS source in `src/` subdirectory.
  - Migrate all JS source to Typescript.
  - Update GoL to use a class rather than inline JS.

## Running

```bash
npm run start
```

## Notes

 - Something goes wrong with the Webpack bundler when setting `config.resolve` for file extensions.
   This config helps Webpack find files that are imported through the source tree from the entrypoint.
   Setting the value for `resolve` explicitly later seemed to correct the issue so there might be some
   override in the config I am missing.
 - WebAssembly must be turned on for Webpack with `config.experiments`. Full support is not finsihed yet.
 - The settings in tsconfig.json where quite specific to get the WASM to work with the bundler.
 - wasm-pack doesn't add the necessary WASM typescript defs to the package.json see https://github.com/rustwasm/wasm-pack/issues/1193