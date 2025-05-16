import type HummingbirdDropdown from "./scripts/dropdown";

declare global {
  interface Window {
    HummingbirdDropdown: typeof HummingbirdDropdown;
  }
}
