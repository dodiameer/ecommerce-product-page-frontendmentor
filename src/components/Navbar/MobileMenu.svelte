<script lang="ts">
  import { portal, clickOutside } from "$lib/actions";
  import { links } from "$lib/links";
  import { fly, fade } from "svelte/transition";
  export let isOpen: boolean;

  // Toggle scroll on body when menu is open
  $: {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.remove("overflow-y-auto");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.add("overflow-y-auto");
    }
  }
</script>

<template>
  {#if isOpen}
    <div
      transition:fade={{ duration: 200 }}
      class="fixed inset-0 w-full h-full bg-black/75 z-10"
    >
      <!-- Backdrop -->
    </div>
    <div
      use:portal={"#nav-portal"}
      use:clickOutside={() => (isOpen = false)}
      transition:fly={{ duration: 400, x: -200 }}
      class="fixed top-0 left-0 w-[70vw] px-4 py-4 z-20 bg-white h-screen shadow-2xl"
    >
      <button on:click={() => (isOpen = false)}>
        <img class="w-4.5 h-4.5" src="/icon-close.svg" alt="Close menu" />
      </button>
      <ul class="mt-8 space-y-4">
        {#each links as { url, name }}
          <li>
            <a
              href={url}
              class="text-lg font-bold"
              on:click={() => (isOpen = false)}>{name}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</template>
