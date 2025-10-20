import BsScrollspy from 'bootstrap/js/dist/scrollspy';

export interface ScrollspyOption {
  offset: number;
  method: 'auto' | 'offset' | 'position';
  rootMargin: string;
  smoothScroll: boolean;
  target: string | Element | JQuery;
  threshold?: number[] | string;
}

export interface ScrollspyInstance {
  refresh(): void;
  dispose(): void;
}

enum ScrollspyEvents {
  activate = 'activate.bs.scrollspy',
}

export interface ScrollspyClass {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: string | Element, options?: Partial<ScrollspyOption>): ScrollspyInstance;
  getInstance(element: string | Element): ScrollspyInstance | null;
  getOrCreateInstance(element: string | Element, config?: Partial<ScrollspyOption>): ScrollspyInstance;
  Default: ScrollspyOption;
  Events: typeof ScrollspyEvents;
}

const Scrollspy = BsScrollspy as unknown as ScrollspyClass;

Scrollspy.Events = ScrollspyEvents;

export default Scrollspy;
