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
  // TODO: Add dispose to all component
}

export interface OffcanvasStatic {
  new (
    element: string | Element,
    options?: OffcanvasOptions,
  ): OffcanvasInstance;
  getInstance(element: string | Element): OffcanvasInstance | null;
  getOrCreateInstance(
    element: string | Element,
    config?: OffcanvasOptions,
  ): OffcanvasInstance;
}

export enum OffcanvasEvents {
  show = 'show.bs.offcanvas',
  shown = 'shown.bs.offcanvas',
  hide = 'hide.bs.offcanvas',
  hidden = 'hidden.bs.offcanvas',
}

const Offcanvas = BsOffcanvas as unknown as OffcanvasStatic;
if (typeof window !== 'undefined') {
  window.Offcanvas = Offcanvas;
}

export default Offcanvas;
