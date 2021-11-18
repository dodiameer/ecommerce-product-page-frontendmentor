<script lang="ts">
  import { fade } from "svelte/transition";
  export let images: string[];
  let currentImage = 0;
</script>

<template>
  <!-- Load images even when component isn't visible -->
  <div class="hidden" hidden>
    {#each images as img}
      <img src={img} alt="" />
    {/each}
  </div>
  <div class="flex flex-col h-full space-y-4">
    {#key currentImage}
      <img
        in:fade={{ duration: 800, delay: 0 }}
        src={images[currentImage]}
        alt="Product"
        class="rounded-lg max-h-[calc(100vh-10rem)]"
      />
    {/key}
    <div class="flex flex-row items-center overflow-x-auto space-x-4">
      {#each images as img, index}
        <button on:click={() => (currentImage = index)}>
          <img
            src={img}
            alt=""
            class="rounded-lg cursor-pointer w-16 h-16 {index === currentImage
              ? 'border-2 border-primary filter grayscale'
              : ''}"
          />
        </button>
      {/each}
    </div>
  </div>
</template>
