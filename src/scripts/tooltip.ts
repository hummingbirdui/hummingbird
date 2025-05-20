import * as Popper from '@popperjs/core';

type PopoverPlacement = 'auto' | 'top' | 'bottom' | 'left' | 'right';
type Offset = [number, number];
type OffsetFunction = () => Offset;
type PopperConfigFunction = (
  defaultBsPopperConfig: Popper.Options,
) => Partial<Popper.Options>;

export interface TooltipOptions {
  animation?: boolean;
  container?: string | Element | false;
  delay?: number | { show: number; hide: number };
  html?: boolean;
  placement?: PopoverPlacement | (() => PopoverPlacement);
  selector?: string | false;
  template?: string;
  title?: string | Element | ((this: HTMLElement) => string | Element);
  trigger?:
    | 'click'
    | 'hover'
    | 'focus'
    | 'manual'
    | 'click hover'
    | 'click focus'
    | 'hover focus'
    | 'click hover focus';
  offset?: Offset | string | OffsetFunction;
  fallbackPlacements?: string[];
  boundary?: Popper.Boundary;
  customClass?: string | (() => string);
  sanitize?: boolean;
  allowList?: Record<keyof HTMLElementTagNameMap | '*', Array<string | RegExp>>;
  sanitizeFn?: (() => void) | null;
  popperConfig?: Partial<Popper.Options> | PopperConfigFunction | null;
}

export interface TooltipInstance {
  show(): void;
  hide(): void;
  toggle(event?: any): void;
  enable(): void;
  disable(): void;
  toggleEnabled(): void;
  update(): void;
  setContent(
    content?: Record<
      string,
      string | Element | (() => string | Element | null) | null
    >,
  ): void;
  dispose(): void;
}

export interface TooltipStatic {
  new (element: Element | string, options?: TooltipOptions): TooltipInstance;
  getInstance(element: Element | string): TooltipInstance | null;
  getOrCreateInstance(
    element: Element | string,
    config?: TooltipOptions,
  ): TooltipInstance;
  Default: TooltipOptions;
}

export enum TooltipEvents {
  SHOW = 'show.bs.tooltip',
  SHOWN = 'shown.bs.tooltip',
  HIDE = 'hide.bs.tooltip',
  HIDDEN = 'hidden.bs.tooltip',
  INSERTED = 'inserted.bs.tooltip',
}
