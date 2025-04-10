import plugin from "tailwindcss/plugin";

export default plugin.withOptions(() => {
  return function ({ addUtilities, addComponents }) {
    addUtilities({
      ".bg-coral": { background: "coral" },
    });
    addComponents({
      ".card": {
        background: "red",
      },
    });
  };
});
