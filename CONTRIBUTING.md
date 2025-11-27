# Contributing to Hummingbird UI

We appreciate your interest in contributing to Hummingbird UI! Your contributions help improve the project and make it better for everyone.

## Table of Contents

- [How to Contribute](#how-to-contribute)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)
- [Development Workflow](#development-workflow)
- [Code Guidelines](#code-guidelines)
- [Pull Request Process](#pull-request-process)
- [Community Guidelines](#community-guidelines)

## How to Contribute

There are multiple ways you can contribute to Hummingbird UI:
- Reporting issues and bugs
- Suggesting new features
- Improving documentation
- Fixing bugs and optimizing performance
- Writing tests

## Reporting Issues

If you find a bug or any issue, please report it using [GitHub Issues](https://github.com/khayrul-dev/hummingbird/issues) with the following details:
- A clear and descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots, if applicable
- Environment details (OS, browser, Node.js version, etc.)

## Feature Requests

We welcome feature requests! Before submitting a request, check the existing [Issues](https://github.com/khayrul-dev/hummingbird/issues) to see if a similar idea has already been proposed. If not, create a new issue with the following details:
- What problem does this feature solve?
- How would you expect it to work?
- Any alternatives you've considered

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Project Structure

- `src/`: Contains the core Hummingbird library source code (CSS, components, plugins).
- `apps/`: Contains the documentation site and examples.
- `lib/`: Generated output for the library (do not edit directly).
- `dist/`: Distribution files (do not edit directly).

## Development Workflow

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

## Code Guidelines

- Follow the existing code structure and style.
- Use meaningful commit messages.
- Write clear and concise comments where necessary.
- Ensure that your changes do not break existing functionality.
- Test your changes before submitting a pull request.

## Pull Request Process

1. Ensure your pull request (PR) follows the [development workflow](#development-workflow).
2. Include a descriptive title and summary of your changes.
3. Link the PR to an issue if applicable.
4. Address any requested changes from maintainers in a timely manner.
5. Once approved, your PR will be merged into the main branch.

## Community Guidelines

- Be respectful and inclusive.
- Constructive feedback is encouraged.
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md) if applicable.

Thank you for contributing to Hummingbird UI! 🚀

