<div align="center">
   <a href="https://hbui.dev/">
      <img  width="350" src='./public/images/logos/hummingbird-lg.svg' alt="Logo" class="w-10 h-10" />
   </a>

   A comprehensive & open-source component library for building Tailwind-powered, sophisticated, scalable web applications.

   ![downloads](https://img.shields.io/npm/dt/@hummingbirdui/hummingbird?style=flat-square)
   ![npm](https://img.shields.io/npm/v/@hummingbirdui/hummingbird?style=flat-square)
   ![license](https://img.shields.io/npm/l/@hummingbirdui/hummingbird?style=flat-square)
   ![bundle size](https://img.shields.io/bundlephobia/min/@hummingbirdui/hummingbird?style=flat-square)
</div>

---

## Table of Contents

- [Documentation](#documentation)
- [Getting Started](#getting-started)
- [Installation](#installation)
  - [Install Tailwind CSS](#install-tailwind-css)
  - [Install Hummingbird](#install-hummingbird)
  - [Import CSS](#import-css)
  - [Initialize JS plugins](#initialize-js-plugins)
- [Optimization](#optimization)
- [TypeScript Support](#typescript-support)
- [ESM vs CJS](#esm-vs-cjs)
- [Supported Frameworks](#supported-frameworks)
- [License](#license)
- [Meet the Team](#meet-the-team)
- [Contributors](#contributors)


---

## Documentation

Comprehensive documentation is available at [hbui.dev](https://hbui.dev/).

## Getting Started

Hummingbird is a fast, lightweight UI library built on top of Tailwind CSS utility classes. Write cleaner HTML, customize with utilities, and bring your project to life with interactive, accessible components. You can:

- Use it as a CSS library
- Import individual JS components (like alerts, dropdowns, etc.)
- Integrate with React, Vue, Astro, or any modern JS framework

---

## Installation

#### 1. Install Tailwind CSS

Ensure you have a project set up with Tailwind CSS. If you haven't set up Tailwind CSS yet, follow the <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer">official installation guide</a>.

#### 2. Install Hummingbird

Install Hummingbird via your preferred package manager:

```bash
# Using npm
npm install @hummingbirdui/hummingbird

# Using yarn
yarn add @hummingbirdui/hummingbird
````

#### 3. Import CSS

Import Hummingbird styles in your main CSS file (e.g., `styles.css`).

```ts
@import "tailwindcss";
@import "@hummingbirdui/hummingbird";
```

#### 4. Initialize JS plugins

Include Hummingbird JavaScript at the end of your HTML body.

```html
<script src="../path/to/@hummingbirdui/hummingbird/dist/hummingbird.bundle.min.js"></script>
```

Alternatively, You can import Hummingbird in your JavaScript entry file.

```ts
import '@hummingbirdui/hummingbird';
```

## Optimization

To reduce the final bundle size, you can import only the specific JavaScript plugins you need.

The below example shows how to import only the [Modal](/docs/components/modal) plugin:

```js
// import "@hummingbirdui/hummingbird/lib/esm/scripts/alert";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/button";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/carousel";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/collapse";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/dropdown";
import "@hummingbirdui/hummingbird/lib/esm/scripts/modal";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/offcanvas";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/popover";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/scrollspy";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/tab";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/toast";
// import "@hummingbirdui/hummingbird/lib/esm/scripts/tooltip";
```

## TypeScript Support

Hummingbird includes TypeScript definitions for all components. If you're using TypeScript, you can import Hummingbird plugins with their types.

```ts
import { Modal } from "@hummingbirdui/hummingbird";
import { type ModalClass, type ModalInstance, type ModalOptions } from "@hummingbirdui/hummingbird";
```

## ESM vs CJS

Hummingbird supports both **ESM** and **CJS** builds so it works with different environments:

* **ESM**
  Used by modern bundlers like **Vite**, **Rollup**, and **Webpack 5+**. If your project is using ES modules (`import` syntax), this is what gets loaded automatically.

* **CJS**
  Used in **Node.js** or older tooling that relies on `require()`. If your environment doesn’t support ESM, bundlers and Node will fall back to this file.

You don’t need to choose manually, your bundler or runtime will pick the right version based on your setup.

---

## Supported Frameworks

| Framework | Supported |
| --------- | --------- |
| React     | ✅         |
| Next.js   | ✅         |
| Laravel   | ✅         |
| Vue       | ✅         |
| Nuxt.js   | ✅         |
| Angular   | ✅         |
| Svelte    | ✅         |
| Astro     | ✅         |
| Gatsby    | ✅         |
| Django    | ✅         |

## License

This project is licensed under the [MIT License](./LICENSE).

## Meet the Team

Meet the core team behind Hummingbird:

<table>
  <tr>
    <td align="center" width="200">
      <img src="https://avatars.githubusercontent.com/u/877255?v=4" width="80" height="80"/><br/>
      <sub><b>Ashraful Prium</b></sub><br/>
      <code>prium</code><br/>
      Founder
    </td>
    <td align="center" width="200">
      <img src="https://avatars.githubusercontent.com/u/12842959?v=4" width="80" height="80"/><br/>
      <sub><b>Muazzem Hussen Chowdhury</b></sub><br/>
      <code>ovi003</code><br/>
      Engineering Manager
    </td>
    <td align="center" width="200">
      <img src="https://avatars.githubusercontent.com/u/86622751?v=4" width="80" height="80"/><br/>
      <sub><b>Khayrul</b></sub><br/>
      <code>khayrul25</code><br/>
      Front-end Developer
    </td>
  </tr>
  <tr>
    <td align="center" width="200">
      <img src="https://avatars.githubusercontent.com/u/141500318?v=4" width="80" height="80"/><br/>
      <sub><b>Riazul</b></sub><br/>
      <code>riazul01</code><br/>
      Jr. Software Engineer
    </td>
    <td></td>
    <td></td>
  </tr>
</table>


## Contributors

Thanks goes to these amazing people:

<a href="https://github.com/hummingbirdui/hummingbird/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hummingbirdui/hummingbird" />
</a>
