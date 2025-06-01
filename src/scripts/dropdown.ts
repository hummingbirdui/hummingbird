import BsDropdown from 'bootstrap/js/dist/dropdown';
import * as Popper from '@popperjs/core';
import { TooltipOptions } from './tooltip';

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

export interface DropdownStatic {
  new (
    element: Element | string,
    options?: Partial<DropdownOptions>,
  ): DropdownInstance;
  getInstance(element: Element | string): DropdownInstance | null;
  getOrCreateInstance(
    element: Element | string,
    config?: Partial<DropdownOptions>,
  ): DropdownInstance;
  Default: DropdownOptions;
}

export enum DropdownEvents {
  SHOW = 'show.bs.dropdown',
  SHOWN = 'shown.bs.dropdown',
  HIDE = 'hide.bs.dropdown',
  HIDDEN = 'hidden.bs.dropdown',
}

const Dropdown = BsDropdown as unknown as DropdownStatic;

if (typeof window !== 'undefined') {
  window.Dropdown = Dropdown;
}

export default Dropdown;
