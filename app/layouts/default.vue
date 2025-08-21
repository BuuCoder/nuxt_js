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
        <slot />
    </div>
</template>
