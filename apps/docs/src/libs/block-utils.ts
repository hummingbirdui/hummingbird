import * as prettier from 'prettier';
import pkg from '@hummingbirdui/hummingbird/package.json';
import browserScript from '@hummingbirdui/browser/dist/index.global.js?raw';

export const iframeMarkup = (code: string) => {
  return `<html>
    <head>
      <script>${browserScript}</script>
      <style type="text/tailwindcss">
        @custom-variant dark (&:where(.dark, .dark *), .dark);
        @custom-variant active (&:active, &.active);
      </style>
      <script is:inline>
        document.documentElement.classList.toggle(
          "dark",
          localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
        );
      </script>
    </head>
    <body class='h-screen'>
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
