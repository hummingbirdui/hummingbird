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
    code: `<div class="w-75 h-full border border-gray-300 dark:border-gray-600 rounded-2xl overflow-hidden">
  <img src='./images/nature.png' class="h-1/2 w-full object-cover" alt="card-image" />
  <div class="p-4 h-1/2 flex flex-col">
    <div class="flex justify-between">
      <div>
        <h4 class="mb-1 text-xl text-gray-800 dark:text-white">Bali Getaway</h4>
        <p class="text-xs text-gray-400 dark:text-gray-500">5 Days · 4 Nights</p>
      </div>
      <h6 class="text-base text-gray-800 dark:text-white">$499 pp</h6>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      Discover the beauty of Bali with guided tours, luxury resorts, and unforgettable sunsets. Perfect for
      families.
    </p>
    <button class="mt-auto w-full h-9 text-sm text-white dark:text-gray-800 font-semibold bg-gray-800 dark:bg-gray-300 rounded-lg"
      >Book now</button
    >
  </div>
</div>`,
  },
  {
    id: 'hummingbird',
    label: 'Hummingbird',
    active: false,
    code: `<div class="card w-75 rounded-2xl overflow-hidden">
  <img src='./images/nature.png' class="card-img-top object-cover h-1/2" alt="card-image" />
  <div class="card-body">
    <div class="flex justify-between">
      <div>
        <h4 class="card-title">Bali Getaway</h4>
        <p class="text-xs text-subtle">5 Days · 4 Nights</p>
      </div>
      <h6 class="text-default text-base">$499 pp</h6>
    </div>

    <p class="mb-0">
      Discover the beauty of Bali with guided tours, luxury resorts, and unforgettable sunsets. Perfect for
      families.
    </p>
  </div>
  <div class="card-footer p-4">
    <button class="btn btn-neutral w-full">Book now</button>
  </div>
</div>`,
  },
];
