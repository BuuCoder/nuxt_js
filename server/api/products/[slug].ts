// server/api/products/[slug].ts
import { defineEventHandler } from 'h3'
import { allProducts } from '../products'

export default defineEventHandler((event) => {
    const slug = event.context.params?.slug
    const product = allProducts.find(p => p.slug === slug)

    if (!product) {
        return { statusCode: 404, message: 'Product not found' }
    }

    return product
})
