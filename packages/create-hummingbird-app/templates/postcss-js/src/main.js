const THEME_KEY = "theme";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

// helpers for managing theme state
const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT;
const getStoredTheme = () => localStorage.getItem(THEME_KEY) ?? THEMES.SYSTEM;
const resolveTheme = (theme) =>
  theme === THEMES.SYSTEM ? getSystemTheme() : theme;

const applyTheme = (theme) => {
  const html = document.documentElement;
  const resolvedTheme = resolveTheme(theme);
  html.classList.add("disable-transition");
  html.classList.toggle("dark", resolvedTheme === THEMES.DARK);
  requestAnimationFrame(() => html.classList.remove("disable-transition"));
};

const toggleTheme = () => {
  const currentTheme = resolveTheme(getStoredTheme());
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, newTheme);
  applyTheme(newTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getStoredTheme());

  // sync theme when os preference changes (only in "system" mode)
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", () => {
    if (getStoredTheme() !== THEMES.SYSTEM) return;
    applyTheme(THEMES.SYSTEM);
  });

  // theme toggle button
  document.addEventListener("click", (event) => {
    const toggleBtn = event.target.closest("[data-theme-toggle-btn]");
    if (!toggleBtn) return;
    toggleTheme();
  });
});
