import * as Hummingbird from './index';

declare global {
  interface Window {
    Alert: typeof Hummingbird.Alert;
    Button: typeof Hummingbird.Button;
    Carousel: typeof Hummingbird.Carousel;
    Collapse: typeof Hummingbird.Collapse;
    Dropdown: typeof Hummingbird.Dropdown;
    Modal: typeof Hummingbird.Modal;
    Offcanvas: typeof Hummingbird.Offcanvas;
    Tab: typeof Hummingbird.Tab;
    Tooltip: typeof Hummingbird.Tooltip;
  }
}

if (typeof window !== 'undefined') {
  window.Alert = Hummingbird.Alert;
  window.Button = Hummingbird.Button;
  window.Carousel = Hummingbird.Carousel;
  window.Collapse = Hummingbird.Collapse;
  window.Dropdown = Hummingbird.Dropdown;
  window.Modal = Hummingbird.Modal;
  window.Offcanvas = Hummingbird.Offcanvas;
  window.Tab = Hummingbird.Tab;
  window.Tooltip = Hummingbird.Tooltip;
}

export * from './index';
