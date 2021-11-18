<script lang="ts">
  import AddToCartButton from "$components/AddToCartButton.svelte";
  import Badge from "$components/Badge.svelte";
  import Carousel from "$components/Carousel.svelte";
  import ImagePicker from "$components/ImagePicker.svelte";
  import QuantityPicker from "$components/QuantityPicker.svelte";

  const images = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];
</script>

<template>
  <Carousel class="lg:hidden" {images} />
  <section
    class="container mt-4 pb-4 lg:(grid grid-cols-2 gap-4 place-items-center)"
  >
    <div class="<lg:hidden">
      <ImagePicker {images} />
    </div>
    <div>
      <p class="text-primary text-sm uppercase font-bold">Sneaker Company</p>
      <p class="text-3xl font-bold capitalize mt-1">
        Fall limited edition sneakers
      </p>
      <p class=" text-gray-500 mt-4 max-w-[60ch]">
        These low-profile sneakers are your perdect casual wear companion.
        Featuring a durable rubber outer sold, they'll withstand everything the
        weather can offer.
      </p>
      <div
        class="flex flex-row items-center lg:(flex-col items-start) mt-2 py-2"
      >
        <div class="flex items-center">
          <p class="text-xl lg:text-2xl font-bold">$125.00</p>
          <Badge class="ml-2">50%</Badge>
        </div>
        <p class="<lg:ml-auto text-gray-500 font-bold text-sm">
          <s>$250.00</s>
        </p>
      </div>
      <div class="lg:(flex items-center space-x-4 mt-4)">
        <div class="lg:w-1/3">
          <QuantityPicker />
        </div>
        <div class="mb-2 lg:hidden" />
        <div class="lg:w-2/3">
          <AddToCartButton />
        </div>
      </div>
    </div>
  </section>
</template>
