<script setup lang="ts">
const props = defineProps<{ images: string[] }>()
const active = ref(0)
</script>

<template>
  <div class="grid gap-3">
    <div class="aspect-[4/3] w-full overflow-hidden rounded-xl2 card p-0">
      <img :src="props.images[active]" class="w-full h-full object-cover" />
    </div>
    <div class="grid grid-cols-4 gap-3">
      <button
        v-for="(img, i) in props.images"
        :key="i"
        @click="active = i"
        class="rounded-xl2 overflow-hidden border"
        :class="i === active ? 'border-accent' : 'border-white/10'"
      >
        <img :src="img" class="w-full h-20 object-cover" />
      </button>
    </div>
  </div>
</template>
