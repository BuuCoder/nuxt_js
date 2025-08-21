export default defineEventHandler(() => {
    const config = useRuntimeConfig()

    return { 
        message: 'Hello world from Nuxt API',
    }
})