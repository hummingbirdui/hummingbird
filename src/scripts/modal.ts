import BsModal from 'bootstrap/js/dist/modal';

export interface ModalOptions {
  backdrop: boolean | 'static';
  keyboard: boolean;
  focus: boolean;
}

export interface ModalInstance {
  toggle(relatedTarget?: HTMLElement): void;
  show(relatedTarget?: HTMLElement): void;
  hide(): void;
  handleUpdate(): void;
  dispose(): void;
}

export interface ModalStatic {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: string | Element, options?: Partial<ModalOptions>): ModalInstance;
  getInstance(element: string | Element): ModalInstance | null;
  getOrCreateInstance(element: string | Element, config?: Partial<ModalOptions>): ModalInstance;
  Default: ModalOptions;
}

export enum ModalEvents {
  show = 'show.bs.modal',
  shown = 'shown.bs.modal',
  hide = 'hide.bs.modal',
  hidden = 'hidden.bs.modal',
  hidePrevented = 'hidePrevented.bs.modal',
}

const Modal = BsModal as unknown as ModalStatic;

if (typeof window !== 'undefined') {
  window.Modal = Modal;
}

export default Modal;
