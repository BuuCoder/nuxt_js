import jwt from 'jsonwebtoken'

export default defineEventHandler(() => {
    const token = jwt.sign(
        { user: 'batdong4', role: 'admin' },
        'secret_key_123',
        { expiresIn: '1h' }
    )

    const decoded = jwt.verify(token, 'secret_key_123')

    return {
        message: 'Hello world from Nuxt API with JWT ✅',
        token,
        decoded
    }
})
