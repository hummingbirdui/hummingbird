# Hummingbird Play CDN

Try **Hummingbird** instantly in the browser - no installation, no build tools, no configuration required.

The Play CDN is designed for rapid experimentation and development. It allows you to explore Hummingbird components and Tailwind utilities instantly inside a simple HTML file.

The Play CDN is intended for development and testing only. It is <strong>not recommended for production use</strong>.


## 🚀 How to Use

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

## 📄 Complete Minimal Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hummingbird Play CDN</title>

  <!-- Hummingbird Play CDN (Styles + Tailwind) -->
  <script src="https://cdn.jsdelivr.net/npm/@hummingbirdui/browser@1.0.0/dist/index.global.js"></script>
</head>

<body>
  <button class="btn btn-primary">
    Button
  </button>

  <!-- Hummingbird Interactive Components -->
  <script src="https://cdn.jsdelivr.net/npm/@hummingbirdui/hummingbird@1.0.0/dist/hummingbird.bundle.min.js"></script>
</body>
</html>
```

## 🔗 Official Website

Visit the official Hummingbird website:

👉 https://hbui.dev/
