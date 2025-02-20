export const docReady = (fn: () => void) => {
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", fn);
  } else {
    setTimeout(fn, 1);
  }
};
