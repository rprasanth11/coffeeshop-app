import axios from 'axios'


const API = import.meta.env.VITE_API_URL || 'http://localhost:4000'


export async function fetchProducts() {
const res = await axios.get(`${API}/api/products`)
return res.data
}
