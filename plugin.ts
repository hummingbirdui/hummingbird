import plugin from "tailwindcss/plugin";

export default plugin.withOptions(() => {
  return function ({ addUtilities }) {
    addUtilities({
      ".bg-coral": { background: "coral" },
    });
  };
});
