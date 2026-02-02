import BsToast from 'bootstrap/js/dist/toast';

export interface ToastOptions {
  animation: boolean;
  autohide: boolean;
  delay: number;
}

export interface ToastInstance {
  show(): void;
  hide(): void;
  isShown(): boolean;
  dispose(): void;
}

enum ToastEvents {
  show = 'show.bs.toast',
  shown = 'shown.bs.toast',
  hide = 'hide.bs.toast',
  hidden = 'hidden.bs.toast',
}

export interface ToastClass {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: string | Element, options?: Partial<ToastOptions>): ToastInstance;
  getInstance(element: string | Element): ToastInstance | null;
  getOrCreateInstance(element: string | Element, config?: Partial<ToastOptions>): ToastInstance;
  Default: ToastOptions;
  Events: typeof ToastEvents;
}

const Toast = BsToast as unknown as ToastClass;

Toast.Events = ToastEvents;

export default Toast;
