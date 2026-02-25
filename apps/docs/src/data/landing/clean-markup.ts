export interface TabData {
  id: string;
  label: string;
  code: string;
  active?: boolean;
}

export const tabsData: TabData[] = [
  {
    id: 'hummingbird',
    label: 'Hummingbird',
    active: true,
    code: `<div class="card overflow-hidden">
  <div class="py-9 text-white text-center bg-[url(/images/mountain.avif)] bg-cover bg-center bg-no-repeat">
    <h5 class="mb-0 font-semibold">Welcome Back</h5>
    <p class="mb-0 text-xs">Enter your login details</p>
  </div>
  <form class="card-body">
    <div class="form-field mb-4">
      <label class="form-label">Email</label>
      <input type="email" class="form-control-fill" />
    </div>
    <div class="form-field mb-2">
      <label class="form-label">Password</label>
      <div class="input-group-icon">
        <input type="password" class="form-control-fill" />
        <svg class="form-control-icon-end" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0013 13.1252C10.9874 13.1252 11.8242 12.7814 12.5117 12.0939C13.1992 11.4064 13.543 10.5696 13.543 9.5835C13.543 8.59738 13.1992 7.76058 12.5117 7.07308C11.8242 6.38558 10.9874 6.04183 10.0013 6.04183C9.01519 6.04183 8.17839 6.38558 7.49089 7.07308C6.80339 7.76058 6.45964 8.59738 6.45964 9.5835C6.45964 10.5696 6.80339 11.4064 7.49089 12.0939C8.17839 12.7814 9.01519 13.1252 10.0013 13.1252ZM10.0013 11.9168C9.34852 11.9168 8.79644 11.6911 8.34505 11.2397C7.89366 10.7884 7.66797 10.2363 7.66797 9.5835C7.66797 8.93072 7.89366 8.37863 8.34505 7.92725C8.79644 7.47586 9.34852 7.25016 10.0013 7.25016C10.6541 7.25016 11.2062 7.47586 11.6576 7.92725C12.1089 8.37863 12.3346 8.93072 12.3346 9.5835C12.3346 10.2363 12.1089 10.7884 11.6576 11.2397C11.2062 11.6911 10.6541 11.9168 10.0013 11.9168ZM10.0013 15.8335C8.08464 15.8335 6.33811 15.3127 4.76172 14.271C3.18533 13.2293 1.96658 11.8543 1.10547 10.146C1.0638 10.0766 1.03255 9.99322 1.01172 9.896C0.990885 9.79877 0.980469 9.69461 0.980469 9.5835C0.980469 9.47238 0.990885 9.36822 1.01172 9.271C1.03255 9.17377 1.0638 9.09044 1.10547 9.021C1.96658 7.31266 3.18533 5.93766 4.76172 4.896C6.33811 3.85433 8.08464 3.3335 10.0013 3.3335C11.918 3.3335 13.6645 3.85433 15.2409 4.896C16.8173 5.93766 18.036 7.31266 18.8971 9.021C18.9388 9.09044 18.9701 9.17377 18.9909 9.271C19.0117 9.36822 19.0221 9.47238 19.0221 9.5835C19.0221 9.69461 19.0117 9.79877 18.9909 9.896C18.9701 9.99322 18.9388 10.0766 18.8971 10.146C18.036 11.8543 16.8173 13.2293 15.2409 14.271C13.6645 15.3127 11.918 15.8335 10.0013 15.8335ZM10.0013 14.5835C11.6819 14.5835 13.227 14.1286 14.6367 13.2189C16.0464 12.3092 17.1194 11.0974 17.8555 9.5835C17.1194 8.06961 16.0464 6.8578 14.6367 5.94808C13.227 5.03836 11.6819 4.5835 10.0013 4.5835C8.32075 4.5835 6.77561 5.03836 5.36589 5.94808C3.95616 6.8578 2.8763 8.06961 2.1263 9.5835C2.8763 11.0974 3.95616 12.3092 5.36589 13.2189C6.77561 14.1286 8.32075 14.5835 10.0013 14.5835Z" fill="#505763"></path></svg>
      </div>
    </div>

    <div class="flex items-center justify-between mb-9">
      <div class="form-check-inline">
        <input class="form-check-input form-check-neutral me-1" type="checkbox" value="" id="remember-me" />
        <label for="remember-me" class="form-check-label text-xs">Remember me</label>
      </div>

      <a class="text-xs text-default font-semibold no-underline" href="#">Forgot password?</a>
    </div>
    <button class="btn btn-neutral w-full">Log in</button>
  </form>
</div>`,
  },
  {
    id: 'tailwindcss',
    label: 'Tailwind CSS',
    active: false,
    code: `<div class="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
  <div class="py-9 text-white text-center bg-[url(/images/mountain.avif)] bg-cover bg-center bg-no-repeat">
    <h5 class="mb-0 font-semibold">Welcome Back</h5>
    <p class="mb-0 text-xs">Enter your login details</p>
  </div>
  <form class="p-4">
    <div class="group mb-4">
      <label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 group-focus-within:text-blue-400 transition-colors">
        Email
      </label>
      <input type="email" class="w-full px-4 py-1.75 text-sm text-gray-800 dark:text-gray-100 leading-5.25 border border-transparent rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 focus:outline-none focus:border-blue-400 focus:bg-blue-50 dark:focus:bg-blue-950 transition-colors" />
    </div>
    <div class="group mb-2">
      <label class="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 group-focus-within:text-blue-400 transition-colors">
        Password
      </label>
      <div class="relative">
        <input type="password" class="w-full px-4 py-1.75 text-sm text-gray-800 dark:text-gray-100 leading-5.25 border border-transparent rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 focus:outline-none focus:border-blue-400 focus:bg-blue-50 dark:focus:bg-blue-950 transition-colors" />
        <svg class="absolute top-1/2 right-4 -translate-y-1/2 text-xl text-gray-500 z-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0013 13.1252C10.9874 13.1252 11.8242 12.7814 12.5117 12.0939C13.1992 11.4064 13.543 10.5696 13.543 9.5835C13.543 8.59738 13.1992 7.76058 12.5117 7.07308C11.8242 6.38558 10.9874 6.04183 10.0013 6.04183C9.01519 6.04183 8.17839 6.38558 7.49089 7.07308C6.80339 7.76058 6.45964 8.59738 6.45964 9.5835C6.45964 10.5696 6.80339 11.4064 7.49089 12.0939C8.17839 12.7814 9.01519 13.1252 10.0013 13.1252ZM10.0013 11.9168C9.34852 11.9168 8.79644 11.6911 8.34505 11.2397C7.89366 10.7884 7.66797 10.2363 7.66797 9.5835C7.66797 8.93072 7.89366 8.37863 8.34505 7.92725C8.79644 7.47586 9.34852 7.25016 10.0013 7.25016C10.6541 7.25016 11.2062 7.47586 11.6576 7.92725C12.1089 8.37863 12.3346 8.93072 12.3346 9.5835C12.3346 10.2363 12.1089 10.7884 11.6576 11.2397C11.2062 11.6911 10.6541 11.9168 10.0013 11.9168ZM10.0013 15.8335C8.08464 15.8335 6.33811 15.3127 4.76172 14.271C3.18533 13.2293 1.96658 11.8543 1.10547 10.146C1.0638 10.0766 1.03255 9.99322 1.01172 9.896C0.990885 9.79877 0.980469 9.69461 0.980469 9.5835C0.980469 9.47238 0.990885 9.36822 1.01172 9.271C1.03255 9.17377 1.0638 9.09044 1.10547 9.021C1.96658 7.31266 3.18533 5.93766 4.76172 4.896C6.33811 3.85433 8.08464 3.3335 10.0013 3.3335C11.918 3.3335 13.6645 3.85433 15.2409 4.896C16.8173 5.93766 18.036 7.31266 18.8971 9.021C18.9388 9.09044 18.9701 9.17377 18.9909 9.271C19.0117 9.36822 19.0221 9.47238 19.0221 9.5835C19.0221 9.69461 19.0117 9.79877 18.9909 9.896C18.9701 9.99322 18.9388 10.0766 18.8971 10.146C18.036 11.8543 16.8173 13.2293 15.2409 14.271C13.6645 15.3127 11.918 15.8335 10.0013 15.8335ZM10.0013 14.5835C11.6819 14.5835 13.227 14.1286 14.6367 13.2189C16.0464 12.3092 17.1194 11.0974 17.8555 9.5835C17.1194 8.06961 16.0464 6.8578 14.6367 5.94808C13.227 5.03836 11.6819 4.5835 10.0013 4.5835C8.32075 4.5835 6.77561 5.03836 5.36589 5.94808C3.95616 6.8578 2.8763 8.06961 2.1263 9.5835C2.8763 11.0974 3.95616 12.3092 5.36589 13.2189C6.77561 14.1286 8.32075 14.5835 10.0013 14.5835Z" fill="currentColor"></path></svg>
      </div>
    </div>

    <div class="flex items-center justify-between mb-9">
      <label class="flex items-center gap-1 text-xs text-gray-800 dark:text-gray-100 cursor-pointer">
        <input type="checkbox" class="peer hidden" />
        <!-- unchecked svg -->
        <svg class="peer-checked:hidden text-gray-200 dark:text-gray-800" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="currentColor"></rect></svg>
        <!-- checked svg -->
        <svg class="hidden peer-checked:block text-gray-800" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" fill="currentColor"></rect><path d="M6.29999 11.7C6.23332 11.7 6.17221 11.6889 6.11666 11.6667C6.0611 11.6444 6.00555 11.6056 5.94999 11.55L2.93333 8.53333C2.83333 8.43333 2.78333 8.31111 2.78333 8.16667C2.78333 8.02222 2.83333 7.9 2.93333 7.8C3.03333 7.7 3.14999 7.65 3.28333 7.65C3.41666 7.65 3.53332 7.7 3.63332 7.8L6.29999 10.4667L12.35 4.41667C12.45 4.31667 12.5694 4.26667 12.7083 4.26667C12.8472 4.26667 12.9667 4.31667 13.0667 4.41667C13.1667 4.51667 13.2167 4.63611 13.2167 4.775C13.2167 4.91389 13.1667 5.03333 13.0667 5.13333L6.64999 11.55C6.59444 11.6056 6.53888 11.6444 6.48333 11.6667C6.42777 11.6889 6.36666 11.7 6.29999 11.7Z" fill="white"></path></svg>
        Remember me
      </label>

      <a class="text-xs text-gray-800 dark:text-gray-100 font-semibold no-underline" href="#">Forgot password?</a>
    </div>
    <button
      type="submit"
      class="w-full px-4 py-1.75 bg-gray-950 dark:bg-gray-700 text-white text-sm font-semibold leading-5.25 border border-transparent rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700/80 transition-colors"
    >
      Log in
    </button>
  </form>
</div>`,
  },
];
