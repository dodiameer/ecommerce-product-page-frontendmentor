<script lang="ts">
  let userClass = "";
  export { userClass as class };
</script>

<template>
  <div class="{userClass} px-2 py-1 bg-primary-100 rounded">
    <p class="text-primary font-bold text-sm">
      <slot />
    </p>
  </div>
</template>
