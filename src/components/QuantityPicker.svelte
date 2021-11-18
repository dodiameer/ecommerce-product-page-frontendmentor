<script lang="ts">
  let quantity = 0;
</script>

<template>
  <div
    class="rounded-md bg-true-gray-100 flex items-center justify-between px-4 py-3 shadow-inner"
  >
    <button
      class="h-8 w-8 flex items-center justify-center"
      on:click={() => {
        if (quantity !== 0) quantity -= 1;
      }}
    >
      <img src="/icon-minus.svg" alt="Decrease" />
    </button>
    <p class="font-bold">{quantity}</p>
    <button
      class="h-8 w-8 flex items-center justify-center"
      on:click={() => {
        quantity += 1;
      }}
    >
      <img src="/icon-plus.svg" alt="Increase" />
    </button>
  </div>
</template>
