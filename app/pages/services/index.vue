<script setup lang="ts">
useHead({ title: 'Services — Positivus' })

const services = [
    { title: 'Search Engine Optimization', desc: 'Improve visibility and organic reach with tailored SEO strategies.' },
    { title: 'Pay-per-click Advertising', desc: 'Drive targeted traffic with high-performing PPC campaigns.' },
    { title: 'Social Media Marketing', desc: 'Engage your audience across platforms with creative campaigns.' },
    { title: 'Email Marketing', desc: 'Nurture leads and boost retention with impactful email campaigns.' },
    { title: 'Content Creation', desc: 'Compelling and optimized content tailored to your audience.' },
    { title: 'Analytics & Tracking', desc: 'Get insights and measure performance with advanced analytics.' }
]
</script>

<template>
    <main class="container-std py-14">
        <h1 class="text-3xl md:text-4xl font-extrabold">Our Services</h1>
        <p class="mt-4 text-white/70">We offer a range of services to help businesses grow and succeed online.</p>

        <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="s in services" :key="s.title" class="card p-6">
                <h2 class="font-semibold text-xl">{{ s.title }}</h2>
                <p class="mt-2 text-white/70">{{ s.desc }}</p>
            </div>
        </div>
    </main>
</template>
