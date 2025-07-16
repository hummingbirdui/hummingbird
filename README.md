# Hummingbird

**An open-source system designed for rapid development, without sacrificing the granular control of utility-first CSS.**  
Hummingbird UI is a utility-first component framework powered by [Tailwind CSS v4](https://tailwindcss.com/), offering modular components and framework-agnostic JavaScript support with builds in ESM, CJS, and UMD formats.

![npm](https://img.shields.io/npm/v/@hummingbirdui/hummingbird?style=flat-square)
![license](https://img.shields.io/npm/l/@hummingbirdui/hummingbird?style=flat-square)
![bundle size](https://img.shields.io/bundlephobia/min/@hummingbirdui/hummingbird?style=flat-square)

---

## Table of Contents

- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage](#-usage)
  - [CSS](#css)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
- [Supported Frameworks](#-supported-frameworks)
- [Features](#-features)
- [Development](#-development)
- [Build System](#-build-system)
- [Contributing](#-contributing)
- [License](#-license)
- [Links](#-links)

---

## Getting Started

Hummingbird UI provides a flexible, component-oriented utility-first system for rapidly building modern UIs. You can:

- Use it as a CSS library
- Import individual JS components (like alerts, dropdowns, etc.)
- Integrate with React, Vue, Astro, or any modern JS framework

---

## Installation

```bash
# Using npm
npm install @hummingbirdui/hummingbird

# Using yarn
yarn add @hummingbirdui/hummingbird
````

---

## Usage

### CSS

#### Using Tailwind CLI or Vite

```ts
// main.ts or main.js
import '@hummingbirdui/hummingbird/src/index.css';
```

#### Or include precompiled files

```html
<!-- Full -->
<link rel="stylesheet" href="node_modules/@hummingbirdui/hummingbird/dist/hummingbird.css" />

<!-- Minified -->
<link rel="stylesheet" href="node_modules/@hummingbirdui/hummingbird/dist/hummingbird.min.css" />
```

---

### JavaScript

#### ESM

```ts
import { Alert } from '@hummingbirdui/hummingbird';
```

#### CommonJS

```js
const Alert = require('@hummingbirdui/hummingbird');
```

#### UMD (for browsers)

```html
<script src="node_modules/@hummingbirdui/hummingbird/dist/hummingbird.bundle.js"></script>
```

---

### TypeScript

Type-safe component usage:

```ts
import type { AlertInstance } from '@hummingbirdui/hummingbird';

const alert: AlertInstance = Alert.getOrCreateInstance('#myAlert');
alert.close();
```

---

## Supported Frameworks

| Framework | Supported |
| --------- | --------- |
| React     | ✅         |
| Vue       | ✅         |
| Angular   | ✅         |
| Svelte    | ✅         |
| Astro     | ✅         |
| Next.js   | ✅         |
| Nuxt.js   | ✅         |
| Laravel   | ✅         |
| Django    | ✅         |

---

## Features

* Tailwind CSS v4 powered design system
* Component-first approach with real JavaScript behavior
* CJS, ESM, and UMD output formats
* TypeScript-ready with declaration files
* Themeable utility system
* Fast builds using Vite + esbuild
* MDX-powered documentation via Astro

---

## Development

Run all services in development mode:

```bash
npm run dev
```

This will:

* Watch and rebuild JS using Vite
* Watch and rebuild docs using Astro
* Watch and rebuild documentation scripts using esbuild

---

## Build System

### Build Everything

```bash
npm run build:npm
```

This will:

* Clean previous `lib` and `dist` folders
* Build `lib/esm` and `lib/cjs`
* Build UMD bundles in `dist`
* Build CSS (`hummingbird.css` & `hummingbird.min.css`)

### Individual Commands

```bash
npm run build:lib         # Build ESM + CJS
npm run build:styles      # Compile Tailwind CSS
npm run build:dist        # Build UMD bundles + CSS
npm run build:docs        # Build Astro documentation
```

---

## Contributing

We welcome contributions from the community!

### Steps to Contribute:

1. **Fork** the repository
2. **Clone** your fork:

   ```bash
   git clone https://github.com/hummingbirdui/hummingbird
   cd hummingbird
   ```
3. **Install** dependencies:

   ```bash
   npm install
   ```
4. **Create** a feature branch:

   ```bash
   git checkout -b feat/your-feature-name
   ```
5. **Commit** your changes and open a pull request 🙌

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Links

* [NPM Package](https://www.npmjs.com/package/@hummingbirdui/hummingbird)
* [GitHub Repo](https://github.com/hummingbirdui/hummingbird)
* [Documentation (Astro)](https://hummingbirdui.github.io/hummingbird)
* [Issue Tracker](https://github.com/hummingbirdui/hummingbird/issues)
* Author: [Khayrul Islam](https://www.linkedin.com/in/khayrul-developer/)
