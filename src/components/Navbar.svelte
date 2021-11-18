<template>
  <nav
    class="container w-full flex flex-row items-center space-x-4 py-2 border-b-gray-200 border-b-1"
  >
    <button class="md:hidden flex items-center justify-center">
      <svg
        class="fill-current h-5 w-5"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
    <h1 class="font-bold text-3xl">sneakers</h1>
    <!-- Pusher - ml-auto doesn't work -->
    <div class="flex-1" />
    <!-- Right section -->
    <button>
      <!-- Cart icon -->
      <img src="/icon-cart.svg" alt="Cart" class="w-5 h-5" />
    </button>
    <img src="/image-avatar.png" alt="User avatar" class="w-6 h-6" />
  </nav>
</template>
