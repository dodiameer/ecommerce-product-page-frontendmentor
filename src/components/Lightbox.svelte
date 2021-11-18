<script lang="ts">
  import { portal, clickOutside } from "$lib/actions";
  import { createEventDispatcher, onMount } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();
  export let src: string;
  export let alt: string;
  let userClass: string = "";
  export { userClass as class };

  onMount(() => {
    document.body.classList.add("overflow-y-hidden");
    document.body.classList.remove("overflow-y-auto");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.add("overflow-y-auto");
    };
  });
</script>

<template>
  <div use:portal={"#lightbox-portal"}>
    <div
      class="fixed inset-0 w-full h-full bg-black/75 z-20"
      in:fade={{ duration: 800 }}
      out:fade={{ duration: 800 }}
    >
      <!-- Backdrop -->
    </div>
    <div
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
      in:fade={{ duration: 600 }}
      out:fade={{ duration: 600 }}
      use:clickOutside={() => dispatch("close")}
    >
      <button
        on:click={() => dispatch("close")}
        class="bg-white p-3 rounded-full flex items-center justify-center absolute top-2 left-2 z-10"
      >
        <img src="/icon-close.svg" alt="Close dialog" />
      </button>
      <img {src} {alt} class="rounded-lg {userClass}" />
    </div>
  </div>
</template>
