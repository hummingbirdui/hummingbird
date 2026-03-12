import * as prettier from 'prettier';

export const iframeMarkup = (code: string) => {
  return `<html>
    <head>
      <script src="https://cdn.jsdelivr.net/npm/@hummingbirdui/browser@1.0.4/dist/index.global.js"><\/script>
      <style type="text/tailwindcss">
      @custom-variant dark (&:where(.dark, .dark *), .dark);
      @custom-variant active (&:active, &.active);
      </style>
      <script is:inline>
        // On page load or when changing themes, best to add inline in head to avoid FOUC
        document.documentElement.classList.toggle(
          "dark",
          localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
        );
      <\/script>
    </head>
    <body class="h-screen">
      ${code}
      <script src="https://cdn.jsdelivr.net/npm/@hummingbirdui/hummingbird@1.0.4/dist/hummingbird.bundle.min.js"></script>
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
