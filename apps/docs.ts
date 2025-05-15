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
  const html = document.documentElement;
  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
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
  let savedTheme = localStorage.getItem("theme") as Theme | null;
  let initialTheme: Theme = savedTheme ?? "light";

  toggleTheme(initialTheme);
  updateToggleThemeButton(initialTheme);
  if (!savedTheme) {
    localStorage.setItem("theme", initialTheme);
  }
  const toggleThemeBtn = document.querySelector("[data-theme-toggle-btn]");
  toggleThemeBtn?.addEventListener("click", () => {
    const newTheme: Theme =
      localStorage.getItem("theme") === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    toggleTheme(newTheme);
    updateToggleThemeButton(newTheme);
  });
});
