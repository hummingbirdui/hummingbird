import BsAlert from 'bootstrap/js/dist/alert';

export interface AlertInstance {
  close(): void;
  dispose(): void;
}

export type ComponentOptions = Record<string, any>;

export interface AlertStatic {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  NAME: 'alert';
  new (element: string | Element): AlertInstance;
  getInstance(element: string | Element): AlertInstance | null;
  getOrCreateInstance(element: string | Element, config?: ComponentOptions): AlertInstance;
}

export enum AlertEvents {
  close = 'close.bs.alert',
  closed = 'closed.bs.alert',
}

const Alert = BsAlert as unknown as AlertStatic;

export default Alert;
