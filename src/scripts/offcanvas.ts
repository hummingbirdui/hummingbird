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

export interface OffcanvasStatic {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: string | Element, options?: Partial<OffcanvasOptions>): OffcanvasInstance;
  getInstance(element: string | Element): OffcanvasInstance | null;
  getOrCreateInstance(element: string | Element, config?: Partial<OffcanvasOptions>): OffcanvasInstance;
}

export enum OffcanvasEvents {
  show = 'show.bs.offcanvas',
  shown = 'shown.bs.offcanvas',
  hide = 'hide.bs.offcanvas',
  hidden = 'hidden.bs.offcanvas',
}

const Offcanvas = BsOffcanvas as unknown as OffcanvasStatic;

export default Offcanvas;
