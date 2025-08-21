<script setup lang="ts">
useHead({ title: 'Blog — Positivus' })

const posts = [
    { slug: 'seo-trends-2025', title: 'Top SEO Trends in 2025', excerpt: 'Stay ahead of the curve with the latest SEO practices for 2025.' },
    { slug: 'social-media-strategy', title: 'Building a Winning Social Media Strategy', excerpt: 'Tips and tricks for creating engaging campaigns.' },
    { slug: 'ppc-optimization', title: 'How to Optimize Your PPC Campaigns', excerpt: 'Maximize ROI with these proven PPC tactics.' }
]
</script>

<template>
    <main class="container-std py-14">
        <h1 class="text-3xl md:text-4xl font-extrabold">Blog</h1>
        <p class="mt-4 text-white/70">Insights, tips, and guides from our digital marketing experts.</p>

        <div class="mt-10 grid md:grid-cols-2 gap-6">
            <NuxtLink v-for="p in posts" :key="p.slug" :to="`/blog/${p.slug}`"
                class="card p-6 hover:shadow-ring transition">
                <h2 class="font-semibold text-xl">{{ p.title }}</h2>
                <p class="mt-2 text-white/70">{{ p.excerpt }}</p>
                <span class="mt-3 inline-block text-accent">Read more →</span>
            </NuxtLink>
        </div>
    </main>
</template>
