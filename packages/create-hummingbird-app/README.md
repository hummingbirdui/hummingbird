# Create Hummingbird App

A fast and flexible CLI tool to quickly scaffold a new starter project using the **[Hummingbird](https://hbui.dev/)** + **[Tailwind CSS](https://tailwindcss.com/)**.

## Installation

**Using npm:**
```bash
npx create-hummingbird-app@latest
```

**Using pnpm:**
```bash
pnpm create hummingbird-app@latest
```

<br/>

## Basic usage

If you run the CLI without flags, it will guide you step-by-step:

```bash
npx create-hummingbird-app@latest
```

You will be prompted to:

1. Enter your project name
2. Choose your preferred Tailwind CSS setup method
3. Choose JavaScript or TypeScript

<br/>

You can also specify a folder name:

```bash
npx create-hummingbird-app@latest my-app
```

<br/>

#### Skip all prompts `-y, --yes`

Use defaults and setup the template instantly.

```bash
## installs default JavaScript template (vite-js)
npx create-hummingbird-app --yes

## installs default TypeScript template (vite-ts)
npx create-hummingbird-app --yes --ts
```

Specify a project directory:

```bash
npx create-hummingbird-app my-app --yes
```

<br/>

#### Choose a template directly `-t, --template <name>`

This bypasses all template-related prompts.

```bash
## choose a full explicit template
npx create-hummingbird-app --template vite-ts

## or choose a shorthand (CLI auto-detects JS/TS)
npx create-hummingbird-app -t vite

## shorthand + TypeScript
npx create-hummingbird-app -t vite --ts
```

Specify directory as well:

```bash
npx create-hummingbird-app -t vite-ts my-app
```

<br/>

#### Force TypeScript `--ts`

If you want TypeScript but still want interactive mode:

```bash
npx create-hummingbird-app --ts
```

Combine with a project directory:

```bash
npx create-hummingbird-app my-app --ts
```

<br/>


#### Full help and reference `-h, --help`

Show help information, including all available flags and usage examples.

```bash
npx create-hummingbird-app --help
```

This will output like this:
```bash
Usage: create-hummingbird-app [options] [project-name]

Arguments:
  project-name               optional project name

Options:
  -V, --version              output the version number
  -y, --yes                  skip all prompts and use defaults
  -t, --template <template>  select template (vite-ts, vite-js, postcss-ts, postcss-js)
  --ts                       force typescript template
  -h, --help                 display help for command
```

<br/>

## Template Matrix

The following templates are available:

| Template Name | Build Tool                     |  CLI Example |
|---------------|--------------------------------|--------------|
| `vite-js`     | Vite + Vanilla JS              | `-t vite` or `-t vite-js` |
| `vite-ts`     | Vite + Vanilla JS (TypeScript) | `-t vite --ts` or `-t vite-ts` |
| `postcss-js`  | PostCSS                        | `-t postcss` or `-t postcss-js` |
| `postcss-ts`  | PostCSS (TypeScript)           | `-t postcss --ts` or `-t postcss-ts` |

<br/>

## CLI Options

| Option | Alias | Description | Example |
|--------|--------|-------------|----------|
| `--yes` | `-y` | Skip all prompts and use default settings | `npx create-hummingbird-app --yes` |
| `--template <name>` | `-t <name>` | Select a specific template (supports shorthand or full name) | `-t vite`, `-t vite-ts`, `-t vite --ts` |
| `--ts` | — | Force TypeScript variant (when using shorthand templates or prompts) | `npx create-hummingbird-app --ts` |
| `<project-name>` | — | Optional project folder name | `npx create-hummingbird-app my-app` |
| `--version` | `-V` | Show the CLI version | `npx create-hummingbird-app -V` |
| `--help` | `-h` | Show help information | `npx create-hummingbird-app -h` |

<br/>

## About

**Create Hummingbird App** is the official project scaffolding tool for
[Hummingbird](https://hbui.dev/) — a high-performance Tailwind-based UI framework.
