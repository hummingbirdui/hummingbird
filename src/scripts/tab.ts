import BsTab from 'bootstrap/js/dist/tab';

export interface TabInstance {
  show(): void;
  dispose(): void;
}

export type ComponentOptions = Record<string, any>;

export interface TabStatic {
  getInstance(element: string | Element): TabInstance | null;
  getOrCreateInstance(element: string | Element, config?: ComponentOptions): TabInstance;
}

export enum TabEvents {
  show = 'show.bs.tab',
  shown = 'shown.bs.tab',
  hide = 'hide.bs.tab',
  hidden = 'hidden.bs.tab',
}

const Tab = BsTab as unknown as TabStatic;

if (typeof window !== 'undefined') {
  window.Tab = Tab;
}

export default Tab;
