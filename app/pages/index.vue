<script setup>
import { ref, onMounted } from 'vue'

const data = ref(null)
const loading = ref(true)

onMounted(() => {
  // giả lập chờ 1s rồi mới gọi API
  setTimeout(async () => {
    const res = await fetch('/api/')
    data.value = await res.json()
    console.log(res)
    loading.value = false
  }, 1000)
})
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900">
    <!-- Navbar -->
    <header class="flex items-center justify-between px-10 py-6">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" alt="Finory" class="h-8" />
        <span class="font-bold text-lg">FINORY COMPANY</span>
      </div>

      <!-- Menu -->
      <nav class="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#" class="hover:text-orange-600">How it works</a>
        <a href="#" class="hover:text-orange-600">About</a>
        <a href="#" class="hover:text-orange-600">Pricing</a>
        <a href="#" class="hover:text-orange-600">Holders</a>
        <a href="#" class="hover:text-orange-600">Blog <span class="text-purple-600">(32)</span></a>
      </nav>

      <!-- Right -->
      <div class="flex items-center space-x-4">
        <button class="text-sm">EN</button>
        <button class="bg-black text-white px-4 py-2 rounded-md text-sm">Sign In</button>
      </div>
    </header>

    <!-- Hero -->
    <section class="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
      <!-- Left content -->
      <div class="space-y-6">
        <h1 class="text-5xl font-bold leading-tight">
          <span class="text-orange-600">Tailored</span><br />
          Banking for a Life<br />
          of Distinction
        </h1>
        <p class="text-gray-600 max-w-lg">
          Tailored financial services designed to meet unique needs,
          offering unmatched security, personalized concierge support.
        </p>
        <div class="flex space-x-4">
          <button class="bg-purple-600 text-white px-6 py-3 rounded-md shadow hover:bg-purple-700">
            Open Account
          </button>
          <button class="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200">
            Learn more
          </button>
        </div>

        <!-- Partners -->
        <div>
          <p class="text-sm font-medium text-gray-500 mb-2">OUR TRUSTED PARTNERS</p>
          <div class="flex space-x-6 items-center opacity-70">
            <img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" alt="Binance" class="h-6" />
            <img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" alt="Ally" class="h-6" />
            <img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" alt="LBank" class="h-6" />
          </div>
        </div>
      </div>

      <!-- Right content (cards) -->
      <div class="relative flex justify-center md:justify-end">
        <!-- Card orange -->
        <div class="absolute top-0 right-20 w-72 h-44 rounded-xl bg-orange-500 text-white p-6 shadow-lg rotate-6">
          <p class="text-lg font-semibold">**** 0007</p>
          <p class="mt-8">Dany Fox</p>
        </div>
        <!-- Card black -->
        <div class="absolute top-20 right-0 w-80 h-48 rounded-xl bg-black text-white p-6 shadow-lg -rotate-3">
          <p class="text-lg font-semibold">4149 5791 3043 3721</p>
          <p class="mt-8">Sam Watson</p>
        </div>
        <!-- Avatar labels -->
        <div class="absolute -left-12 top-4 bg-white shadow px-3 py-2 rounded-full flex items-center space-x-2">
          <img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" class="h-6 w-6 rounded-full" />
          <span class="text-sm font-medium">Johanna Jones</span>
        </div>
        <div class="absolute -left-8 bottom-20 bg-white shadow px-3 py-2 rounded-full flex items-center space-x-2">
          <img src="https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png" class="h-6 w-6 rounded-full" />
          <span class="text-sm font-medium">Andrew Smith</span>
        </div>
      </div>
    </section>

    <!-- Footer icons -->
    <footer class="px-10 py-6 flex justify-between items-center border-t">
      <div class="flex space-x-4">
        <button class="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center">
          <i class="fa fa-play"></i>
        </button>
        <button class="rounded-full bg-gray-100 w-10 h-10"></button>
        <button class="rounded-full bg-gray-100 w-10 h-10"></button>
      </div>
      <p class="text-gray-500 text-sm">⭐ Loved by 200k+ users</p>
    </footer>
  </div>
</template>