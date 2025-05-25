import Collapse from './scripts/collapse';
import Dropdown from './scripts/dropdown';
import Tooltip from './scripts/tooltip';

declare global {
  interface Window {
    Dropdown: typeof Dropdown;
    Tooltip: typeof Tooltip;
    Collapse: typeof Collapse;
  }
}
