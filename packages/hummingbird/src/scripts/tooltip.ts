import * as Popper from '@popperjs/core';
import BsTooltip from 'bootstrap/js/dist/tooltip';

type PopoverPlacement = 'auto' | 'top' | 'bottom' | 'left' | 'right';
type Offset = [number, number];
type OffsetFunction = () => Offset;
type PopperConfigFunction = (defaultBsPopperConfig: Popper.Options) => Partial<Popper.Options>;
type SetContentFunction = () => string | Element | (() => string | Element | null) | null;

export interface TooltipOptions {
  animation: boolean;
  container: string | Element | false;
  delay: number | { show: number; hide: number };
  html: boolean;
  placement: PopoverPlacement | (() => PopoverPlacement);
  selector: string | false;
  template: string;
  title: string | Element | ((this: HTMLElement) => string | Element);
  trigger: 'click' | 'hover' | 'focus' | 'manual' | 'click hover' | 'click focus' | 'hover focus' | 'click hover focus';
  offset: Offset | string | OffsetFunction;
  fallbackPlacements: string[];
  boundary: Popper.Boundary;
  customClass: string | (() => string);
  sanitize: boolean;
  allowList: Record<keyof HTMLElementTagNameMap | '*', Array<string | RegExp>>;
  sanitizeFn: (() => void) | null;
  popperConfig: Partial<Popper.Options> | PopperConfigFunction | null;
}

export interface TooltipInstance {
  show(): void;
  hide(): void;
  toggle(event?: any): void;
  enable(): void;
  disable(): void;
  toggleEnabled(): void;
  update(): void;
  setContent(content?: Record<string, string | Element | SetContentFunction | null>): void;
  dispose(): void;
}

enum TooltipEvents {
  show = 'show.bs.tooltip',
  shown = 'shown.bs.tooltip',
  hide = 'hide.bs.tooltip',
  hidden = 'hidden.bs.tooltip',
  inserted = 'inserted.bs.tooltip',
}

export interface TooltipClass {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: Element | string, options?: Partial<TooltipOptions>): TooltipInstance;
  getInstance(element: Element | string): TooltipInstance | null;
  getOrCreateInstance(element: Element | string, config?: Partial<TooltipOptions>): TooltipInstance;
  Default: TooltipOptions;
  NAME: 'tooltip';
  Event: Record<
    'CLICK' | 'FOCUSIN' | 'FOCUSOUT' | 'HIDDEN' | 'HIDE' | 'INSERTED' | 'MOUSEENTER' | 'MOUSELEAVE' | 'SHOW' | 'SHOWN',
    string
  >;
  DefaultType: Record<keyof TooltipOptions, string>;
  SetContentFunction: SetContentFunction;
  Events: typeof TooltipEvents;
}

const Tooltip = BsTooltip as unknown as TooltipClass;

Tooltip.Events = TooltipEvents;

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
Array.from(tooltipTriggerList).map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));

export default Tooltip;
