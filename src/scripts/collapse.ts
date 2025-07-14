import BsCollapse from 'bootstrap/js/dist/collapse';

export interface CollapseOptions {
  parent: string | Element;
  toggle: boolean;
}

export interface CollapseInstance {
  toggle(): void;
  show(): void;
  hide(): void;
  dispose(): void;
}

export interface CollapseStatic {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: string | Element, options?: Partial<CollapseOptions>): CollapseInstance;
  getInstance(element: Element | string): CollapseInstance | null;
  getOrCreateInstance(element: Element | string, config?: Partial<CollapseOptions>): CollapseInstance;
  Default: CollapseOptions;
}

export enum CollapseEvents {
  show = 'show.bs.collapse',
  shown = 'shown.bs.collapse',
  hide = 'hide.bs.collapse',
  hidden = 'hidden.bs.collapse',
}

const Collapse = BsCollapse as unknown as CollapseStatic;

export default Collapse;
