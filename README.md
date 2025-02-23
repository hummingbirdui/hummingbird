# Hummingbird UI

Hummingbird UI is a lightweight and customizable UI component library built with **Tailwind CSS**. It provides pre-designed elements and components to help developers rapidly build beautiful interfaces with minimal effort.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [TypeScript Support](#typescript-support)
- [ESM & CJS Modules](#esm--cjs-modules)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install Hummingbird UI, use npm or yarn:

```sh
npm install hummingbird-ui
```

or

```sh
yarn add hummingbird-ui
```

## Usage

### Importing Styles

Add the styles to your project:

```js
import 'hummingbird-ui/dist/hummingbird.min.css';
```

### Importing Components

You can import components using ES modules:

```js
import { Modal } from 'hummingbird-ui';
```

Or using CommonJS:

```js
const { Modal } = require('hummingbird-ui');
```

## Features

- 🚀 **Built with Tailwind CSS**: Fully customizable using Tailwind’s utility classes.
- 📦 **ESM & CJS Support**: Works seamlessly with modern JavaScript environments.
- ✅ **TypeScript Support**: Strongly typed components for better development experience.
- ⚡ **Optimized for Performance**: Minified and tree-shakeable build system.

## TypeScript Support

Hummingbird UI is built with TypeScript, providing type safety and autocompletion in modern editors. Type definitions are included in the package, making integration seamless for TypeScript projects.

To use it in a TypeScript project, simply install and import components as needed:

```ts
import { Modal } from 'hummingbird-ui';
```

## ESM & CJS Modules

Hummingbird UI supports both **ECMAScript Modules (ESM)** and **CommonJS (CJS)** for better compatibility:

- **ESM Import:**
  ```js
  import { Modal } from 'hummingbird-ui';
  ```

- **CJS Require:**
  ```js
  const { Modal } = require('hummingbird-ui');
  ```

These exports are defined in the `package.json` under the `exports` field, ensuring compatibility with various build systems.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License

Hummingbird UI is licensed under the [MIT License](LICENSE).

---

> Developed by [Hummingbird UI](https://github.com/hummingbird-ui/hummingbird)

