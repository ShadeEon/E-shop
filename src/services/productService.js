import axios from 'axios'; // Or use fetch, but Axios is common

const api = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
})

export const fetchProductCategories = async () => {
    // This is where you handle the raw API call and basic error checking
    const response = await api.get('/products/categories')
    return response.data // Axios automatically parses JSON
}

export const fetchProductById = async (id) => {
    if (!id) throw new Error('Product ID is required')
    const response = await api.get(`/products/${id}`)
    return response.data
}

export const fetchAllProducts = async () => {
    const response = await api.get('/products?limit=12')
    return response.data.products
}