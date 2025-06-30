import BsButton from 'bootstrap/js/dist/button';

export interface ButtonInstance {
  toggle(): void;
  dispose(): void;
}

export type ComponentOptions = Record<string, any>;

export interface ButtonStatic {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: Element | string): ButtonInstance;
  getInstance(element: string | Element): ButtonInstance | null;
  getOrCreateInstance(element: string | Element, config?: ComponentOptions): ButtonInstance;
}

const Button = BsButton as unknown as ButtonStatic;

if (typeof window !== 'undefined') {
  window.Button = Button;
}

export default Button;
