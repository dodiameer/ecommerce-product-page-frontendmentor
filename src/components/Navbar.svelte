<script lang="ts">
  import MobileMenu from "$components/Navbar/MobileMenu.svelte";
  import { links } from "$lib/links";
  let isOpen = false;
</script>

<template>
  <nav
    class="container w-full flex flex-row items-center space-x-4 py-2 lg:py-6 border-b-gray-200 border-b-1"
  >
    <button
      class="lg:hidden flex items-center justify-center"
      on:click={() => (isOpen = !isOpen)}
    >
      <svg
        class="fill-current h-5 w-5"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
    <MobileMenu bind:isOpen />
    <a class="font-bold text-3xl" href="/">sneakers</a>
    <ul class="hidden lg:block space-x-4 !ml-12">
      {#each links as { name, url }}
        <li class="inline-block">
          <a
            href={url}
            class="text-gray-500 hover:(border-b-2 border-b-gray-500) px-1 pb-1"
            >{name}</a
          >
        </li>
      {/each}
    </ul>
    <!-- Pusher - ml-auto doesn't work -->
    <div class="flex-1" />
    <!-- Right section -->
    <button>
      <!-- Cart icon -->
      <img src="/icon-cart.svg" alt="Cart" class="w-5 h-5" />
    </button>
    <img
      src="/image-avatar.png"
      alt="User avatar"
      class="w-6 h-6 lg:(w-10 h-10 !ml-8)"
    />
  </nav>
</template>
