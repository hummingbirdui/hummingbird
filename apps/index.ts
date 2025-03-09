type Theme = "dark" | "light";

const toggleSidenav = () => {
  const toggleBtn = document.querySelector("[data-toggle-sidebar]");
  const sidebar = document.querySelector("[data-sidebar]");
  if (sidebar) {
    toggleBtn?.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });
  }
};

const toggleTheme = (theme: Theme) => {
  let html = document.querySelector("html");
  if (theme === "dark") {
    html?.classList.add("dark");
  } else {
    html?.classList.remove("dark");
  }
};

const updateToggleThemeButton = (theme: Theme) => {
  const moonIcon = document.querySelector('[data-theme-toggle="dark"]');
  const sunIcon = document.querySelector('[data-theme-toggle="light"]');
  if (theme === "dark") {
    moonIcon?.classList.add("hidden");
    sunIcon?.classList.remove("hidden");
  } else {
    moonIcon?.classList.remove("hidden");
    sunIcon?.classList.add("hidden");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  toggleSidenav();

  // toggle theme
  const toggleThemeBtn = document.querySelector("[data-theme-toggle-btn]");
  toggleThemeBtn?.addEventListener("click", () => {
    let currentTheme: Theme =
      localStorage.getItem("theme") === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    localStorage.setItem("theme", currentTheme);

    toggleTheme(currentTheme);
    updateToggleThemeButton(currentTheme);
  });
});
