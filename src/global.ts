import Dropdown from './scripts/dropdown';

declare global {
  interface Window {
    Dropdown: typeof Dropdown;
  }
}
