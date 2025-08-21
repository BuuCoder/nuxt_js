// types/product.d.ts
export interface Product {
    id: string
    slug: string
    name: string
    price: number
    oldPrice?: number
    rating?: number
    images: string[]
    shortDesc: string
    description: string
    tags?: string[]
    specs?: Record<string, string>
}
