<script setup lang="ts">
useHead({ title: 'Pricing — Positivus' })

const plans = [
    { name: 'Starter', price: '$29/mo', features: ['SEO basics', 'Email support', 'Analytics reports'] },
    { name: 'Growth', price: '$99/mo', features: ['Advanced SEO', 'PPC campaigns', 'Priority support'] },
    { name: 'Enterprise', price: '$299/mo', features: ['Custom strategy', 'Dedicated manager', 'Full analytics suite'] }
]
</script>

<template>
    <main class="container-std py-14">
        <h1 class="text-3xl md:text-4xl font-extrabold">Pricing Plans</h1>
        <p class="mt-4 text-white/70">Choose a plan that fits your business needs.</p>

        <div class="mt-10 grid md:grid-cols-3 gap-6">
            <div v-for="p in plans" :key="p.name" class="card p-6 flex flex-col">
                <h2 class="font-semibold text-xl">{{ p.name }}</h2>
                <p class="mt-2 text-2xl font-bold">{{ p.price }}</p>
                <ul class="mt-4 space-y-2 flex-1">
                    <li v-for="f in p.features" :key="f" class="text-white/70">✔ {{ f }}</li>
                </ul>
                <button class="btn btn-primary mt-6">Get Started</button>
            </div>
        </div>
    </main>
</template>
