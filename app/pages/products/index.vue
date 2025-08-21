<script setup lang="ts">
import type { Product } from '../../../types/product'

useHead({ title: 'Products — Positivus' })

// Lấy toàn bộ sản phẩm từ API
const { data: products, pending, error } = await useFetch<Product[]>('/api/products')

// state cho search + sort
const search = ref('')
const sort = ref('featured')

// tính toán list sản phẩm hiển thị
const filtered = computed(() => {
  if (!products.value) return []
  let list = [...products.value]

  // filter theo search
  if (search.value.trim()) {
    const q = search.value.toLowerCase()
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q)
    )
  }

  // sort
  if (sort.value === 'low') {
    list.sort((a, b) => a.price - b.price)
  } else if (sort.value === 'high') {
    list.sort((a, b) => b.price - a.price)
  }

  return list
})
</script>

<template>
  <main class="container-std py-10 md:py-14">
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="tag">Products</span>
        <p class="text-sm text-white/60">Explore our latest gear</p>
      </div>

      <div class="flex items-center gap-2">
        <input v-model="search" placeholder="Search..."
          class="bg-white/5 border border-white/10 rounded-xl2 px-4 py-2 outline-none focus:ring-2 focus:ring-accent" />
        <select v-model="sort"
          class="bg-white/5 border border-white/10 rounded-xl2 px-3 py-2 outline-none focus:ring-2 focus:ring-accent">
          <option value="featured">Featured</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>
    </div>

    <!-- loading -->
    <div v-if="pending" class="mt-10 text-white/60">Loading products...</div>

    <!-- error -->
    <div v-else-if="error" class="mt-10 text-red-400">
      Failed to load products.
    </div>

    <!-- list -->
    <div v-else class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="p in filtered" :key="p.id" :product="p" />
    </div>

    <!-- empty -->
    <div v-if="!pending && filtered.length === 0" class="mt-10 text-white/60">
      No products found.
    </div>
  </main>
</template>
