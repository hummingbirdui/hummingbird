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
    code: `<div class="p-4 w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
  <h1 class="mb-4 text-xl text-center text-gray-800 dark:text-white">Sign In</h1>
  <form class="space-y-3">
    <div class="group">
      <label
        for="email"
        class="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 group-focus-within:text-blue-400 transition-colors"
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        class="w-full px-4 py-1.75 text-sm leading-5.25 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
      />
    </div>

    <div class="group mb-5">
      <label
        for="password"
        class="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 group-focus-within:text-blue-400 transition-colors"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        class="w-full px-4 py-1.75 text-sm leading-5.25 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
      />
    </div>

    <button
      type="submit"
      class="w-full px-4 py-1.75 bg-gray-950 dark:bg-gray-700 text-white text-sm font-semibold leading-5.25 border border-transparent rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700/80 transition-colors"
    >
      Sign in
    </button>
  </form>
</div>`,
  },
  {
    id: 'hummingbird',
    label: 'Hummingbird',
    active: false,
    code: `<div class="card">
  <div class="card-body">
    <h1 class="card-title text-center">Sign In</h1>
    <form class="space-y-3">
      <div class="form-field">
        <label class="form-label">Email</label>
        <input type="text" class="form-control" />
      </div>
      <div class="form-field">
        <label class="form-label">Password</label>
        <input type="text" class="form-control" />
      </div>
      <button class="btn btn-neutral w-full">Sign in</button>
    </form>
  </div>
</div>`,
  },
];
