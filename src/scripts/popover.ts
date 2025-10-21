import BsPopover from 'bootstrap/js/dist/popover';
import type { TooltipOptions } from './tooltip';

type SetContentFunction = () => string | Element | (() => string | Element | null) | null;

export interface PopoverOptions extends TooltipOptions {
  content: string | Element | ((this: HTMLElement) => string | Element);
}

export interface PopoverInstance {
  show(): void;
  hide(): void;
  toggle(): void;
  enable(): void;
  disable(): void;
  toggleEnabled(): void;
  update(): void;
  setContent(content?: Record<string, string | Element | SetContentFunction | null>): void;
  dispose(): void;
}

enum PopoverEvents {
  show = 'show.bs.popover',
  shown = 'shown.bs.popover',
  hide = 'hide.bs.popover',
  hidden = 'hidden.bs.popover',
  inserted = 'inserted.bs.popover',
}

export interface PopoverClass {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: Element | string, options?: Partial<PopoverOptions>): PopoverInstance;
  getInstance(element: Element | string): PopoverInstance | null;
  getOrCreateInstance(element: Element | string, config?: Partial<PopoverOptions>): PopoverInstance;
  NAME: 'popover';
  Default: PopoverOptions;
  DefaultType: Record<keyof PopoverOptions, string>;
  Event: Record<
    'CLICK' | 'FOCUSIN' | 'FOCUSOUT' | 'HIDDEN' | 'HIDE' | 'INSERTED' | 'MOUSEENTER' | 'MOUSELEAVE' | 'SHOW' | 'SHOWN',
    string
  >;
  Events: typeof PopoverEvents;
}

const Popover = BsPopover as unknown as PopoverClass;

Popover.Events = PopoverEvents;

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
Array.from(popoverTriggerList).map((popoverTriggerEl) => new Popover(popoverTriggerEl));

export default Popover;
