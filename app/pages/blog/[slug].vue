<script setup lang="ts">
const route = useRoute()
useHead({ title: `${route.params.slug} — Blog — Positivus` })

// mock content
const post = {
    title: 'Top SEO Trends in 2025',
    content: `
    In 2025, SEO continues to evolve with a focus on AI-driven content,
    voice search, and user experience. Businesses need to adapt to stay competitive.`
}
</script>

<template>
    <main class="container-std py-14 max-w-3xl">
        <h1 class="text-3xl md:text-4xl font-extrabold">{{ post.title }}</h1>
        <article class="mt-6 prose prose-invert prose-lg max-w-none">
            <p>{{ post.content }}</p>
        </article>
    </main>
</template>
