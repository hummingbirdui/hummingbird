import * as prettier from 'prettier';
import pkg from '@hummingbirdui/hummingbird/package.json';

export const iframeMarkup = (
  code: string,
  options: { syncDarkMode?: boolean; bodyClass?: string } = { syncDarkMode: true },
) => {
  return `<html>
    <head>
      <script src="https://cdn.jsdelivr.net/npm/@hummingbirdui/browser@${pkg.version}/dist/index.global.js"></script>
      <link rel="stylesheet" href="/themes.css">
      <style type="text/tailwindcss">
        @custom-variant dark (&:where(.dark, .dark *), .dark);
        @custom-variant active (&:active, &.active);
      </style>
      <script is:inline>
        const mainTheme = localStorage.getItem("main-theme");
        if (mainTheme) {
          document.documentElement.setAttribute("data-theme", mainTheme);
        }

        ${
          options.syncDarkMode
            ? `
        document.documentElement.classList.toggle(
          "dark",
          localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
        );
        `
            : ''
        }
      </script>
    </head>
    <body class='h-screen ${options.bodyClass}'>
      ${code}
      <script src="https://cdn.jsdelivr.net/npm/@hummingbirdui/hummingbird@${pkg.version}/dist/hummingbird.bundle.min.js"></script>
    </body>
  </html>`;
};

export const codeBeautify = async (rawCode: string) => {
  const stripped = rawCode
    .replace(/\s*data-astro-source-file="[^"]*"/g, '')
    .replace(/\s*data-astro-source-loc="[^"]*"/g, '')
    .replace(/\s*data-astro-cid-[a-z0-9]+="[^"]*"/g, '');
  const code = await prettier.format(stripped, {
    parser: 'html',
    printWidth: 9999,
    tabWidth: 2,
    htmlWhitespaceSensitivity: 'ignore',
  });
  return code;
};
