<script setup lang="ts">
import type { Product } from '../../types/product'

defineProps<{ product: Product }>()
</script>

<template>
  <article class="card p-4 flex flex-col">
    <NuxtLink :to="`/products/${product.slug}`" class="block overflow-hidden rounded-xl2">
      <img :src="product.images[0]" :alt="product.name"
        class="w-full h-48 object-cover transition-transform duration-300 hover:scale-[1.03]" />
    </NuxtLink>

    <div class="mt-4 flex-1">
      <NuxtLink :to="`/products/${product.slug}`" class="font-semibold hover:text-accent">
        {{ product.name }}
      </NuxtLink>
      <p class="mt-1 text-sm text-white/70">{{ product.shortDesc }}</p>
      <div class="mt-3 flex items-center gap-2">
        <span class="text-lg font-bold">${{ product.price.toFixed(2) }}</span>
        <span v-if="product.oldPrice" class="text-sm text-white/40 line-through">
          ${{ product.oldPrice?.toFixed(2) }}
        </span>
      </div>
    </div>

    <div class="mt-4 flex items-center gap-2">
      <button class="btn btn-primary flex-1">Add to cart</button>
      <NuxtLink :to="`/products/${product.slug}`" class="btn btn-dark">
        View
      </NuxtLink>
    </div>
  </article>
</template>
