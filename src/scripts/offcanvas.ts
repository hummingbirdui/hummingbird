import BsOffcanvas from 'bootstrap/js/dist/offcanvas';

export interface OffcanvasOptions {
  backdrop: boolean | 'static';
  keyboard: boolean;
  scroll: boolean;
}

export interface OffcanvasInstance {
  toggle(relatedTarget?: HTMLElement): void;
  show(relatedTarget?: HTMLElement): void;
  hide(): void;
  dispose(): void;
}

enum OffcanvasEvents {
  show = 'show.bs.offcanvas',
  shown = 'shown.bs.offcanvas',
  hide = 'hide.bs.offcanvas',
  hidden = 'hidden.bs.offcanvas',
}

export interface OffcanvasClass {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: string | Element, options?: Partial<OffcanvasOptions>): OffcanvasInstance;
  getInstance(element: string | Element): OffcanvasInstance | null;
  getOrCreateInstance(element: string | Element, config?: Partial<OffcanvasOptions>): OffcanvasInstance;
  Events: typeof OffcanvasEvents;
}

const Offcanvas = BsOffcanvas as unknown as OffcanvasClass;

Offcanvas.Events = OffcanvasEvents;

export default Offcanvas;
