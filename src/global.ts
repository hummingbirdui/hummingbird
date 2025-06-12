import Alert from './scripts/alert';
import Carousel from './scripts/carousel';
import Collapse from './scripts/collapse';
import Dropdown from './scripts/dropdown';
import Modal from './scripts/modal';
import Offcanvas from './scripts/offcanvas';
import Tab from './scripts/tab';
import Tooltip from './scripts/tooltip';

declare global {
  interface Window {
    Dropdown: typeof Dropdown;
    Tooltip: typeof Tooltip;
    Collapse: typeof Collapse;
    Offcanvas: typeof Offcanvas;
    Modal: typeof Modal;
    Carousel: typeof Carousel;
    Alert: typeof Alert;
    Tab: typeof Tab;
  }
}
