import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import { fetchProducts } from './api'


export default function App() {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)


useEffect(() => {
fetchProducts().then(data => {
setProducts(data)
setLoading(false)
}).catch(err => {
console.error(err)
setLoading(false)
})
}, [])


return (
<div className="min-h-screen bg-gray-50">
<Header />
<main className="max-w-6xl mx-auto p-4">
{loading ? (
<p>Loading products...</p>
) : (
<ProductGrid products={products} />
)}
</main>
</div>
)
}
