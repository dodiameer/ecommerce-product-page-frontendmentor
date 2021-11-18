<script lang="ts">
  import { fade } from "svelte/transition";
  export let images: string[];
  let currentImage = 0;

  const nextImage = () => {
    currentImage = (currentImage + 1) % images.length;
  };
  const previousImage = () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
  };

  $: console.log({ currentImage });
</script>

<template>
  <div hidden class="hidden">
    <!-- Browser will load and cache them so they won't have to load when shown in carousel -->
    {#each images as image}
      <img src={image} alt="" />
    {/each}
  </div>
  <section class="relative bg-primary-200">
    <button
      on:click={previousImage}
      class="absolute top-1/2 left-2 z-10  bg-white rounded-full w-9 h-9 flex items-center justify-center"
    >
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="/icon-previous.svg" alt="Previous image" class="w-2.5 h-4" />
    </button>
    <div class="flex flex-row items-center overflow-hidden max-h-82">
      {#key currentImage}
        <img
          in:fade={{ duration: 400, delay: 400 }}
          out:fade={{ duration: 300, delay: 0 }}
          src={images[currentImage]}
          alt=""
          class="w-full h-auto object-contain"
        />
      {/key}
    </div>
    <button
      on:click={nextImage}
      class="absolute top-1/2 right-2 z-10 bg-white rounded-full w-9 h-9 flex items-center justify-center"
    >
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="/icon-next.svg" alt="Next image" class="w-2.5 h-4" />
    </button>
  </section>
</template>
