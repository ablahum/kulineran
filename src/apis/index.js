import axios from 'axios'

export const getAllProducts = async () => {
  const url = 'http://localhost:3000/products'
  return await axios.get(url)
}

export const getBestProducts = async () => {
  const url = 'http://localhost:3000/best-products'
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

export const getCart = async () => {
  const url = 'http://localhost:3000/cart'
  return await axios.get(url)
}

export const deleteCartItem = async (productId) => {
  const url = `http://localhost:3000/cart/${productId}`
  return await axios.delete(url)
}

export const addToCart = async (payload) => {
  const url = 'http://localhost:3000/cart'
  return await axios.post(url, payload)
}

export const createCheckout = async (payload) => {
  const url = 'http://localhost:3000/orders'
  return await axios.post(url, payload)
}
