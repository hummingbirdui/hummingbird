type Theme = "dark" | "light" | "system";

const THEME_KEY = "theme";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

//  helpers for managing theme state
const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT;
const getStoredTheme = (): Theme =>
  (localStorage.getItem(THEME_KEY) as Theme) ?? (THEMES.SYSTEM as Theme);
const resolveTheme = (theme: Theme) =>
  theme === THEMES.SYSTEM ? getSystemTheme() : theme;

const applyTheme = (theme: Theme) => {
  const html = document.documentElement;
  const resolvedTheme = resolveTheme(theme);
  html.classList.add("disable-transition");
  html.classList.toggle("dark", resolvedTheme === THEMES.DARK);
  requestAnimationFrame(() => html.classList.remove("disable-transition"));
};

const toggleTheme = () => {
  const currentTheme = resolveTheme(getStoredTheme());
  console.log(currentTheme);
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
    if (!(event.target instanceof Element)) return;
    const toggleBtn = event.target.closest("[data-theme-toggle-btn]");
    if (!toggleBtn) return;
    toggleTheme();
  });
});
