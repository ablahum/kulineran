import axios from 'axios'

export const getBestProducts = async () => {
  const url = 'http://localhost:3000/best-products'
  return await axios.get(url)
}

export const getAllProducts = async () => {
  const url = 'http://localhost:3000/products'
  return await axios.get(url)
}

export const getProductBySearch = async (keyword) => {
  const url = `http://localhost:3000/products?q=${keyword}`
  return await axios.get(url)
}

export const getSpecificProduct = async (productId) => {
  const url = `http://localhost:3000/products/${productId}`
  return await axios.get(url)
}

export const createOrder = async (payload) => {
  const url = 'http://localhost:3000/cart'
  return await axios.post(url, payload)
}

export const getCart = async () => {
  const url = 'http://localhost:3000/cart'
  return await axios.get(url)
}
