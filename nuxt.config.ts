import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [nodePolyfills()]
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    // Options
  }
})
