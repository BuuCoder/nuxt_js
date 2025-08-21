<script setup lang="ts">
import type { Product } from '../../../types/product'
const route = useRoute()
const slug = route.params.slug
// chỉ 1 sản phẩm
const { data: product, pending, error } = await useFetch<Product>(`/api/products/${slug}`)

// list sản phẩm
const { data: products } = await useFetch<Product[]>('/api/products')

useHead({
  title: computed(() =>
    product.value ? `${product.value.name} — Positivus` : 'Product — Positivus'
  )
})
</script>

<template>
  <!-- loading -->
  <main class="container-std py-14" v-if="pending">
    <p class="text-white/70">Loading product...</p>
  </main>

  <!-- error -->
  <main class="container-std py-14" v-else-if="error">
    <p class="text-red-400">Failed to load product.</p>
  </main>

  <!-- not found -->
  <main class="container-std py-14" v-else-if="!product">
    <p class="text-white/70">Product not found.</p>
  </main>

  <!-- content -->
  <main class="container-std py-10 md:py-14" v-else>
    <div class="grid lg:grid-cols-2 gap-10">
      <ProductGallery :images="product.images" />

      <section>
        <h1 class="text-3xl md:text-4xl font-extrabold">{{ product.name }}</h1>
        <p class="mt-3 text-white/70">{{ product.shortDesc }}</p>

        <div class="mt-4 flex items-center gap-3">
          <div class="text-2xl font-extrabold">${{ product.price.toFixed(2) }}</div>
          <div v-if="product.oldPrice" class="text-white/40 line-through">
            ${{ product.oldPrice.toFixed(2) }}
          </div>
          <div v-if="product.rating" class="ml-auto text-sm text-white/70">
            ★ {{ product.rating.toFixed(1) }}
          </div>
        </div>

        <div class="mt-6 flex items-center gap-2">
          <button class="btn btn-primary flex-1">Add to cart</button>
          <button class="btn btn-dark">Buy now</button>
        </div>

        <div class="mt-8 card p-6">
          <h2 class="font-semibold">Specifications</h2>
          <div class="mt-4 grid sm:grid-cols-2 gap-3">
            <div v-for="(val, key) in product.specs" :key="key"
              class="flex justify-between gap-4 border-b border-white/10 py-2">
              <span class="text-white/60">{{ key }}</span>
              <span class="font-medium">{{ val }}</span>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <h2 class="font-semibold">Description</h2>
          <p class="mt-2 text-white/70 leading-relaxed">
            {{ product.description }}
          </p>
          <div v-if="product.tags?.length" class="mt-4 flex flex-wrap gap-2">
            <span v-for="t in product.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
      </section>
    </div>

    <!-- gợi ý sản phẩm -->
    <section class="mt-14" v-if="products?.length">
      <h3 class="font-semibold mb-4">You may also like</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          v-for="p in products?.filter(p => p.slug !== product?.slug).slice(0, 3)"
          :key="p.id"
          :product="p"
        />
      </div>
    </section>
  </main>
</template>
