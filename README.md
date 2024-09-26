<div align="center">

  <h1><code>wasm-pack-template-renewed</code></h1>

  <strong>A template for kick starting a Rust and WebAssembly project using <a href="https://github.com/rustwasm/wasm-pack">wasm-pack</a>.</strong>

  <h3>
    <a href="https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html">Tutorial</a>
    <span> | </span>
    <a href="https://discordapp.com/channels/442252698964721669/443151097398296587">Chat</a>
  </h3>

  <sub>Built with 🦀🕸 by <a href="https://rustwasm.github.io/">The Rust and WebAssembly Working Group</a></sub>
</div>

## Whats different

Compared with the original tutorial content, this version updates versions of the various packages, updates configurations for the webpack bundler, and offers examples of using the rust compilation in the old, and new JS vs Typescript.

This repo combines two [rustwasm](https://github.com/rustwasm) repositories to create a working example:
 - [create-wasm-app](https://github.com/rustwasm/create-wasm-app)
 - [wasm-pack-template](https://github.com/rustwasm/wasm-pack-template)

### Rust

The rust crate is moved to a subdirectory `rs` to distinguish it from the the other parts of the
repository. The package is then published to `./dist/wasm-rust-gol`.

Following the tutorial for the rust portion was relatively straight forward.

### JS `./www`

The unchanged javascript example that accompanies the original tutorial worked with the pinned
versions in that example. No changes were needed.

### JSnew `./www.new`

This version of the original example updates the webpack and dependency versions. It removes
many security issues. I found I needed to reinitialise the webpack project using `npx webpack 
--init` and copy in the appropriate files from the old example. The game of life example is also
moved into a `./src directory and its own module.

### TypeScript `./www.ts`

This was the most difficult to get working, there were a few issues with interfacing the TS
package and the WASM module compiled from Rust. This required some tweaking of the webpack config
to recognise `.ts` files and the `tsconfig.js` file TS compiler options.

## About

[**📚 Read this template tutorial! 📚**][template-docs]

This template is designed for compiling Rust libraries into WebAssembly and
publishing the resulting package to NPM.

Be sure to check out [other `wasm-pack` tutorials online][tutorials] for other
templates and usages of `wasm-pack`.

[tutorials]: https://rustwasm.github.io/docs/wasm-pack/tutorials/index.html
[template-docs]: https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html

## 🚴 Usage

### 🐑 Use `cargo generate` to Clone this Template

[Learn more about `cargo generate` here.](https://github.com/ashleygwilliams/cargo-generate)

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template.git --name my-project
cd my-project
```

### 🛠️ Build with `wasm-pack build`

```
wasm-pack build
```

### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```

### 🎁 Publish to NPM with `wasm-pack publish`

```
wasm-pack publish
```

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* `LICENSE-APACHE` and `LICENSE-MIT`: most Rust projects are licensed this way, so these are included for you

## License

Licensed under either of

* Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
