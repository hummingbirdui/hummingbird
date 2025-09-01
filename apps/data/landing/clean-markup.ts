export interface TabData {
  id: string;
  label: string;
  code: string;
  active?: boolean;
}

export const tabsData: TabData[] = [
  {
    id: 'tailwindcss',
    label: 'Tailwind CSS',
    active: true,
    code: `<div class="card rounded-2xl h-full overflow-hidden">
  <img src={cardImage.src} class="card-img-top aspect-[10/7]" alt="Headphone" />
  <div class="card-body pb-1.5">
    <h4 class="card-title text-base">Wireless Headphone</h4>
    <p class="text-sm">Premium audio with noise cancellation.</p>

    <div class="mb-6 flex items-center space-x-2">
      <span class="text-2xl text-subtle font-bold tracking-tight">$400</span>
      <span class="text-emphasis">$800</span>
      <span class="badge badge-subtle-success text-success-dark">50% off</span>
    </div>

    <div class="flex items-center gap-1">
      <button class="btn btn-square h-7.5 w-7.5 text-emphasis bg-highlight rounded-sm">
        <RemoveIcon />
      </button>
      <span class="px-5 py-1.25 text-subtle text-sm bg-muted rounded-sm">2</span>
      <button class="btn btn-square h-7.5 w-7.5 bg-muted rounded-sm">
        <AddIcon />
      </button>
    </div>
  </div>
  <div class="card-footer p-4">
    <button class="btn btn-neutral w-full">
      <CartIcon /> Add to Cart
    </button>
  </div>
</div>`,
  },
  {
    id: 'hummingbird',
    label: 'Hummingbird',
    active: false,
    code: `<div class="card rounded-2xl h-full overflow-hidden">
  <img src={cardImage.src} class="card-img-top aspect-[10/7]" alt="Headphone" />
  <div class="card-body pb-1.5">
    <h4 class="card-title text-base">Wireless Headphone</h4>
    <p class="text-sm">Premium audio with noise cancellation.</p>

    <div class="mb-6 flex items-center space-x-2">
      <span class="text-2xl text-subtle font-bold tracking-tight">$400</span>
      <span class="text-emphasis">$800</span>
      <span class="badge badge-subtle-success text-success-dark">50% off</span>
    </div>

    <div class="flex items-center gap-1">
      <button class="btn btn-square h-7.5 w-7.5 text-emphasis bg-highlight rounded-sm">
        <RemoveIcon />
      </button>
      <span class="px-5 py-1.25 text-subtle text-sm bg-muted rounded-sm">2</span>
      <button class="btn btn-square h-7.5 w-7.5 bg-muted rounded-sm">
        <AddIcon />
      </button>
    </div>
  </div>
  <div class="card-footer p-4">
    <button class="btn btn-neutral w-full">
      <CartIcon /> Add to Cart
    </button>
  </div>
</div>`,
  },
];

export const product = {
  title: 'Wireless Headphone',
  desc: 'Premium audio with noise cancellation.',
  price: '$400',
  oldPrice: '$800',
  discount: '50% off',
};
