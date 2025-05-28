import Collapse from './scripts/collapse';
import Dropdown from './scripts/dropdown';
import Offcanvas from './scripts/offcanvas';
import Tooltip from './scripts/tooltip';

declare global {
  interface Window {
    Dropdown: typeof Dropdown;
    Tooltip: typeof Tooltip;
    Collapse: typeof Collapse;
    Offcanvas: typeof Offcanvas;
  }
}
