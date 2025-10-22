import BsDropdown from 'bootstrap/js/dist/dropdown';
import * as Popper from '@popperjs/core';
import { type TooltipOptions } from './tooltip';

type Offset = [number, number];
type OffsetFunction = () => Offset;

export interface DropdownOptions extends Pick<TooltipOptions, 'popperConfig'> {
  offset: Offset | string | OffsetFunction;
  boundary: Popper.Boundary | Element;
  reference: 'toggle' | 'parent' | Element | Popper.Rect;
  display: 'dynamic' | 'static';
  autoClose: boolean | 'inside' | 'outside';
}

export interface DropdownInstance {
  toggle(): void;
  show(): void;
  hide(): void;
  update(): void;
  dispose(): void;
}

enum DropdownEvents {
  show = 'show.bs.dropdown',
  shown = 'shown.bs.dropdown',
  hide = 'hide.bs.dropdown',
  hidden = 'hidden.bs.dropdown',
}

export interface DropdownClass {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: Element | string, options?: Partial<DropdownOptions>): DropdownInstance;
  getInstance(element: Element | string): DropdownInstance | null;
  getOrCreateInstance(element: Element | string, config?: Partial<DropdownOptions>): DropdownInstance;
  Default: DropdownOptions;
  Events: typeof DropdownEvents;
}

const Dropdown = BsDropdown as unknown as DropdownClass;

Dropdown.Events = DropdownEvents;

export default Dropdown;
