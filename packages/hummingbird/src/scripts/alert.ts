import BsAlert from 'bootstrap/js/dist/alert';

export interface AlertInstance {
  close(): void;
  dispose(): void;
}

export type ComponentOptions = Record<string, any>;

enum AlertEvents {
  close = 'close.bs.alert',
  closed = 'closed.bs.alert',
}

export interface AlertClass {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  NAME: 'alert';
  new (element: string | Element): AlertInstance;
  getInstance(element: string | Element): AlertInstance | null;
  getOrCreateInstance(element: string | Element, config?: ComponentOptions): AlertInstance;
  Events: typeof AlertEvents;
}

const Alert = BsAlert as unknown as AlertClass;

Alert.Events = AlertEvents;

export default Alert;
