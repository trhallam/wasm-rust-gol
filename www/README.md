# Original WASM JS Implementation

This repository  uses the [`create-wasm-app`](https://github.com/rustwasm/create-wasm-app) template.

## Notes

 - Using `npm init wasm-app` did not work for me. I had to clone the repo directly.
 - A lot of the packages used by this template are out of date and node will give quite a few security
   warnings.
 - Otherwise works out of the box with the compiles web assembly package from wasm-pack.

## Running

```shell
npm run start
```