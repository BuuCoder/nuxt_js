// server/api/products.ts
import { defineEventHandler } from 'h3'

const products = [
    {
        id: 'p-001',
        slug: 'aurora-headset-pro',
        name: 'Aurora Headset Pro',
        price: 129.9,
        oldPrice: 159.9,
        rating: 4.6,
        images: [
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1600&auto=format&fit=crop',
        ],
        shortDesc: 'Wireless over-ear headset with active noise cancelling',
        description: 'Experience immersive audio with Aurora Headset Pro: active noise cancelling, 40h battery, and ultra-soft ear cushions.',
        tags: ['audio', 'wireless', 'gaming'],
        specs: { Driver: '40mm', Connectivity: 'BT 5.3', Weight: '240g', Battery: '40h' }
    },
    {
        id: 'p-002',
        slug: 'nebula-mechanical-keyboard',
        name: 'Nebula Mechanical Keyboard',
        price: 89.0,
        rating: 4.4,
        images: [
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop'
        ],
        shortDesc: 'Hot-swappable 75% keyboard with RGB',
        description: 'Compact 75% board with hot-swap sockets, PBT caps, gasket mount, and south-facing RGB for a premium typing feel.',
        tags: ['keyboard', 'rgb'],
        specs: { Layout: '75%', Switches: 'Hot-swap', Case: 'Aluminum', Connection: 'USB-C' }
    },
    {
        id: 'p-003',
        slug: 'stellar-mouse-lite',
        name: 'Stellar Mouse Lite',
        price: 39.0,
        rating: 4.2,
        images: [
            'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1600&auto=format&fit=crop'
        ],
        shortDesc: 'Ultra-light ergonomic mouse',
        description: 'Featherweight mouse designed for comfort and speed with PTFE feet and low-latency sensor.',
        tags: ['mouse', 'lightweight'],
        specs: { Weight: '59g', Sensor: 'PMW3395', DPI: '26K' }
    },
    {
        id: 'p-004',
        slug: 'stellar-mouse-lite-2',
        name: 'Stellar Mouse Lite 2',
        price: 39.0,
        rating: 4.2,
        images: [
            'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1600&auto=format&fit=crop'
        ],
        shortDesc: 'Ultra-light ergonomic mouse',
        description: 'Featherweight mouse designed for comfort and speed with PTFE feet and low-latency sensor.',
        tags: ['mouse', 'lightweight'],
        specs: { Weight: '59g', Sensor: 'PMW3395', DPI: '26K' }
    }
]

// Export để tái sử dụng ở file khác
export const allProducts = products

export default defineEventHandler(() => {
    return products
})
