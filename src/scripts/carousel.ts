import BsCarousel from 'bootstrap/js/dist/carousel';

export interface CarouselOptions {
  interval: number | false;
  keyboard: boolean;
  pause: 'hover' | false;
  ride: 'carousel' | boolean;
  wrap: boolean;
  touch: boolean;
}

export interface CarouselInstance {
  cycle(): void;
  pause(event?: any): void;
  prev(): void;
  next(): void;
  nextWhenVisible(): void;
  to(index: number): void;
  dispose(): void;
}

type GetOrCreateInstance = (element: Element | string, config?: Partial<CarouselOptions>) => CarouselInstance;

export interface CarouselStatic {
  readonly VERSION: string;
  readonly DATA_KEY: string;
  readonly EVENT_KEY: string;
  new (element: Element | string, options?: Partial<CarouselOptions>): CarouselInstance;
  getInstance(element: Element | string): CarouselInstance | null;
  getOrCreateInstance: GetOrCreateInstance;
  carouselInstance: GetOrCreateInstance;
  Default: CarouselOptions;
}

export enum CarouselEvents {
  slide = 'slide.bs.carousel',
  slid = 'slid.bs.carousel',
}

type Direction = 'left' | 'right';

export interface Event {
  readonly direction: Direction;
  readonly relatedTarget: Element;
  readonly from: number;
  readonly to: number;
}

const Carousel = BsCarousel as unknown as CarouselStatic;

if (typeof window !== 'undefined') {
  window.Carousel = Carousel;
}

export default Carousel;
