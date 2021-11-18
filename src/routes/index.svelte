<script lang="ts">
  import AddToCartButton from "$components/AddToCartButton.svelte";
  import Badge from "$components/Badge.svelte";
  import Carousel from "$components/Carousel.svelte";
  import QuantityPicker from "$components/QuantityPicker.svelte";

  const images = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];
</script>

<template>
  <Carousel {images} />
  <section class="container mt-4 pb-4">
    <p class="text-primary text-sm uppercase font-bold">Sneaker Company</p>
    <p class="text-3xl font-bold capitalize mt-1">
      Fall limited edition sneakers
    </p>
    <p class=" text-gray-500 mt-4">
      These low-profile sneakers are your perdect casual wear companion.
      Featuring a durable rubber outer sold, they'll withstand everything the
      weather can offer.
    </p>
    <div class="flex flex-row items-center mt-2 py-2">
      <p class="text-xl font-bold">$125.00</p>
      <Badge class="ml-2">50%</Badge>
      <p class="ml-auto text-gray-500 text-sm"><s>$250.00</s></p>
    </div>
    <QuantityPicker />
    <div class="mb-2" />
    <AddToCartButton />
  </section>
</template>
