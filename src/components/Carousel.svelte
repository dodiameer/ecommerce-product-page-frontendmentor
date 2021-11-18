<script lang="ts">
  import { fade } from "svelte/transition";
  import Lightbox from "./Lightbox.svelte";
  export let images: string[];
  let userClass = "";
  export { userClass as class };

  let isLightboxOpen = false;
  let currentImage = 0;

  const nextImage = () => {
    currentImage = (currentImage + 1) % images.length;
  };
  const previousImage = () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
  };
</script>

<template>
  <div class={userClass}>
    <div hidden class="hidden">
      <!-- Browser will load and cache them so they won't have to load when shown in carousel -->
      {#each images as image}
        <img src={image} alt="" />
      {/each}
    </div>
    <section class="relative bg-primary-200">
      <button
        on:click={previousImage}
        class="absolute top-1/2 left-2 z-10 bg-white rounded-full w-9 h-9 flex items-center justify-center"
      >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="/icon-previous.svg" alt="Previous image" class="w-2.5 h-4" />
      </button>
      <div class="flex flex-row items-center overflow-hidden max-h-82">
        {#key currentImage}
          <button on:click={() => (isLightboxOpen = true)}>
            <img
              in:fade={{ duration: 400, delay: 400 }}
              out:fade={{ duration: 300, delay: 0 }}
              src={images[currentImage]}
              alt=""
              class="w-full h-auto object-contain"
            />
          </button>
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
  </div>
  {#if isLightboxOpen}
    <Lightbox
      src={images[currentImage]}
      alt=""
      on:close={() => (isLightboxOpen = false)}
      class="max-w-xl w-[calc(100vw-4rem)]"
    />
  {/if}
</template>
