<!-- layouts/default.vue -->
<script setup>
useHead({
    title: 'Positivus — Landing',
    link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
    ]
})
</script>

<template>
    <div class="bg-ink text-white font-sans antialiased">
        <main>
            <!-- Header -->
            <header class="sticky top-0 z-50 bg-ink/80 backdrop-blur border-b border-white/10">
                <nav class="container-std h-16 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="size-8 rounded-lg bg-white flex items-center justify-center">
                            <span class="text-ink font-extrabold">★</span>
                        </div>
                        <span class="font-bold">Positivus</span>
                    </div>

                    <ul class="hidden md:flex items-center gap-8 text-sm text-white/80">
                        <li><NuxtLink to="/about-us" class="hover:text-white">About us</NuxtLink></li>
                        <li><NuxtLink to="/services" class="hover:text-white">Services</NuxtLink></li>
                        <li><NuxtLink to="/products" class="hover:text-white">Products</NuxtLink></li>
                        <li><NuxtLink to="/pricing" class="hover:text-white">Pricing</NuxtLink></li>
                        <li><NuxtLink to="/blog" class="hover:text-white">Blog</NuxtLink></li>
                    </ul>

                    <div class="flex items-center gap-3">
                        <button class="btn btn-dark hidden sm:inline-flex">Book a consultation</button>
                        <button class="btn btn-primary">Request a quote</button>
                    </div>
                </nav>
            </header>
            <div class="min-h-[calc(100vh-415px)]">
                <slot />
            </div>
            <!-- Footer -->
            <footer class="mt-8 border-t border-white/10">
                <div class="container-std py-10 grid md:grid-cols-[1fr_auto] gap-10">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <div class="size-8 rounded-lg bg-white flex items-center justify-center">
                                <span class="text-ink font-extrabold">★</span>
                            </div>
                            <span class="font-bold">Positivus</span>
                        </div>
                        <div class="text-sm text-white/70">
                            Email: info@positivus.com • Phone: 555-987-8901 <br /> Address: 1234 Main St, Moonstone
                            City, StarDust State 12345
                        </div>
                        <div class="flex items-center gap-3">
                            <a class="btn btn-primary">Contact us</a>
                        </div>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-6">
                        <div>
                            <h5 class="font-semibold mb-3">Links</h5>
                            <ul class="space-y-2 text-sm text-white/70">
                                <li><a href="#about" class="hover:text-white">About us</a></li>
                                <li><a href="#services" class="hover:text-white">Services</a></li>
                                <li><a href="#usecases" class="hover:text-white">Use Cases</a></li>
                                <li><a href="#pricing" class="hover:text-white">Pricing</a></li>
                                <li><a href="#blog" class="hover:text-white">Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5 class="font-semibold mb-3">Newsletter</h5>
                            <form class="flex gap-3">
                                <input placeholder="Email"
                                    class="min-w-0 flex-1 bg-white/5 border border-white/10 rounded-xl2 px-4 py-3 outline-none focus:ring-2 focus:ring-accent" />
                                <button class="btn btn-primary">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="container-std py-6 border-t border-white/10 text-sm text-white/50">
                    © 2025 Positivus. All rights reserved. • <a href="#" class="hover:text-white">Privacy Policy</a>
                </div>
            </footer>
        </main>
    </div>
</template>
