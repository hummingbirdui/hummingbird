import BsAlert from 'bootstrap/js/dist/alert';

export interface AlertInstance {
  close(): void;
  dispose(): void;
}

export type ComponentOptions = Record<string, any>;

export interface AlertStatic {
  NAME: 'alert';
  getInstance(element: string | Element): AlertInstance | null;
  getOrCreateInstance(element: string | Element, config?: ComponentOptions): AlertInstance;
}

const Alert = BsAlert as unknown as AlertStatic;

if (typeof window !== 'undefined') {
  window.Alert = Alert;
}

export default Alert;
