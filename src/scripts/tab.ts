import BsTab from 'bootstrap/js/dist/tab';

export interface TabInstance {
  show(): void;
  dispose(): void;
}

export type ComponentOptions = Record<string, any>;

enum TabEvents {
  show = 'show.bs.tab',
  shown = 'shown.bs.tab',
  hide = 'hide.bs.tab',
  hidden = 'hidden.bs.tab',
}

export interface TabClass {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: string | Element): TabInstance;
  getInstance(element: string | Element): TabInstance | null;
  getOrCreateInstance(element: string | Element, config?: ComponentOptions): TabInstance;
  Events: typeof TabEvents;
}

const Tab = BsTab as unknown as TabClass;

Tab.Events = TabEvents;

export default Tab;
