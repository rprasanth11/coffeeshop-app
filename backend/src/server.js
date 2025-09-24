import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productsRouter from './routes/products.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

// API routes
app.use('/api/products', productsRouter)

// serve product images (only if you want backend to serve frontend images)
app.use('/assets/images', express.static('../frontend/src/assets/images'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))
