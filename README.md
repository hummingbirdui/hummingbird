<div align="center">
   <a href="https://hbui.dev/">
      <img  width="350" src='https://raw.githubusercontent.com/hummingbirdui/hummingbird/87dc656e578d3e6fd0e4a45eabe1f5e02bdeafd1/apps/docs/public/images/logos/hummingbird-lg.svg' alt="Logo" class="w-10 h-10" />
   </a>

   The most sensible component system for Tailwind.

   ![downloads](https://img.shields.io/npm/dt/@hummingbirdui/hummingbird?style=flat-square)
   ![npm](https://img.shields.io/npm/v/@hummingbirdui/hummingbird?style=flat-square)
   ![license](https://img.shields.io/npm/l/@hummingbirdui/hummingbird?style=flat-square)
   ![bundle size](https://img.shields.io/bundlephobia/min/@hummingbirdui/hummingbird?style=flat-square)
</div>

---

## Table of contents

- [Documentation](#documentation)
- [Getting Started](#getting-started)
- [Installation](#installation)
  - [Install Tailwind CSS](#1-install-tailwind-css)
  - [Install Hummingbird](#2-install-hummingbird)
  - [Import CSS](#3-import-css)
  - [Initialize JS plugins](#4-initialize-js-plugins)
- [Optimization](#optimization)
- [TypeScript Support](#typescript-support)
- [ESM vs CJS](#esm-vs-cjs)
- [Include using CDN](#include-using-cdn)
  - [Play CDN](#play-cdn)
  - [CDN Script](#cdn-script)
- [Supported Frameworks](#supported-frameworks)
- [License](#license)
- [Contribution guidelines](#contribution-guidelines)
- [Meet the Team](#meet-the-team)
- [Contributors](#contributors)

## Documentation

Comprehensive documentation is available at [hbui.dev](https://hbui.dev/).

## Getting started

Hummingbird is a fast, lightweight UI library built on top of Tailwind CSS utility classes. Write cleaner HTML, customize with utilities, and bring your project to life with interactive, accessible components. You can:

- Use it as a CSS library
- Import individual JS components (like Modal, Dropdowns, etc.)
- Integrate with React, Vue, Angular, Astro, or any modern JS framework

## Installation

### 1. Install Tailwind CSS

Ensure you have a project set up with Tailwind CSS. If you haven't set up Tailwind CSS yet, follow the <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer">official installation guide</a>.

### 2. Install Hummingbird

Install Hummingbird via your preferred package manager:

```bash
# Using npm
npm install @hummingbirdui/hummingbird

# Using yarn
yarn add @hummingbirdui/hummingbird
````

### 3. Import CSS

Import Hummingbird styles in your main CSS file (e.g., `styles.css`).

```ts
@import "tailwindcss";
@import "@hummingbirdui/hummingbird";
```

### 4. Initialize JS plugins

Include Hummingbird JavaScript at the end of your HTML body.

```html
<script src="../path/to/@hummingbirdui/hummingbird/dist/hummingbird.bundle.min.js"></script>
```

Alternatively, if using a build system (like Vite or Webpack), import Hummingbird directly in the JavaScript entry file.

```ts
import '@hummingbirdui/hummingbird';
```

## Optimization

To reduce the final bundle size, you can import only the specific JavaScript plugins you need.

The below example shows how to import only the Modal plugin:

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

The example below demonstrates how to efficiently control the Modal component programmatically by importing only the Modal plugin.

```js
import Modal from "@hummingbirdui/hummingbird/lib/esm/scripts/modal";
const openBtn = document.querySelector("[data-open-demo-modal]");
const myModal = new Modal(".modal");

openBtn.addEventListener("click", () => {
  myModal.show();
});
```

## TypeScript support

Hummingbird includes TypeScript definitions for all components. If you're using TypeScript, you can import Hummingbird plugins with their types.

```ts
import { Modal } from "@hummingbirdui/hummingbird";
import { type ModalClass, type ModalInstance, type ModalOptions } from "@hummingbirdui/hummingbird";
```

## ESM vs CJS

Hummingbird supports both **ESM** and **CJS** builds, so it works with different environments:

* **ESM:**
  Used by modern bundlers like **Vite**, **Rollup**, and **Webpack 5+**. If your project is using ES modules (`import` syntax), this is what gets loaded automatically.

* **CJS:**
  Used in **Node.js** or older tooling that relies on `require()`. If your environment doesn’t support ESM, bundlers and Node will fall back to this file.

No manual choice is required; the bundler or runtime will select the correct version based on the setup.

## Include using CDN

CDN is a fast and easy way to include Hummingbird in a project. 

### Play CDN

Use the Play CDN to try Hummingbird in the browser without any build step. The Play CDN is designed for development purposes only, and is not intended for production.

Add the Play CDN script tag to the `<head>` of your HTML file, and start using Hummingbird’s and Tailwind’s classes to style the content.

```html
<script src="https://cdn.jsdelivr.net/npm/@hummingbirdui/browser@1.0.0/dist/index.global.js"></script>
```

### CDN Script

And include the following JavaScript before the end of the `<body>` tag for interactive components.

```html
<script src="https://cdn.jsdelivr.net/npm/@hummingbirdui/hummingbird@1.0.0/dist/hummingbird.bundle.min.js"></script>
```

## Supported frameworks

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

## Contribution guidelines

To contribute code:

1. **Fork the repository** to your own GitHub account.

2. **Clone your fork** locally:
   ```sh
   git clone https://github.com/your-username/hummingbird.git
   cd hummingbird
   ```

3. **Install dependencies**:
   ```sh
   npm install
   ```

4. **Start the development server**:
   This will start the documentation site locally, allowing you to see changes in real-time.
   ```sh
   npm start
   ```
   The site will typically be available at `http://localhost:4321` (or another port if 4321 is busy).

5. **Create a new branch** for your feature or bug fix:
   ```sh
   git checkout -b feature-or-bugfix-name
   ```

6. **Make your changes**:
   - If modifying the library, work in `src/`.
   - If updating documentation, work in `apps/`.

7. **Build the project** (optional but recommended before committing):
   To ensure everything builds correctly:
   ```sh
   npm run build:npm
   ```

8. **Commit your changes**:
   ```sh
   git commit -m "Your descriptive commit message"
   ```

9. **Push your changes** to your fork:
   ```sh
   git push origin feature-or-bugfix-name
   ```

10. **Open a pull request** against the `main` branch.

## Meet the team

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
      <sub><b>Khayrul Islam</b></sub><br/>
      <code>khayrul25</code><br/>
      Front-end Developer
    </td>
  </tr>
  <tr>
    <td align="center" width="200">
      <img src="https://avatars.githubusercontent.com/u/141500318?v=4" width="80" height="80"/><br/>
      <sub><b>Riazul Islam</b></sub><br/>
      <code>riazul01</code><br/>
      Software Engineer
    </td>
    <td align="center" width="200">
      <img src="https://avatars.githubusercontent.com/u/110757982?v=4" width="80" height="80"/><br/>
      <sub><b>Qurratul Aein Rafia</b></sub><br/>
      <code>RafiAein</code><br/>
      Editorial Strategist
    </td>
    <td align="center" width="200">
      <img src="https://avatars.githubusercontent.com/u/236851058?v=4" width="80" height="80"/><br/>
      <sub><b>Pantha Sharma</b></sub><br/>
      <code>Pantha-25</code><br/>
      UI/UX Designer
    </td>
  </tr>
</table>


## Contributors

Thanks goes to these amazing people:

<a href="https://github.com/hummingbirdui/hummingbird/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hummingbirdui/hummingbird" />
</a>
