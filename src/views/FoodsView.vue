<template>
  <div class="foods container">
    <NavbarCont />

    <FoodsCont
      :products="products"
      :keyword="handleKeyword"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { FoodsCont, NavbarCont } from '@/containers'

export default {
  name: 'FoodsView',
  components: { NavbarCont, FoodsCont },

  data() {
    return {
      products: [],
    }
  },

  methods: {
    async getAllProducts() {
      try {
        const url = 'http://localhost:3000/products'
        const res = await axios.get(url)

        this.products = res.data
      } catch (err) {
        console.log(err)
      }
    },

    async getSpecificProduct(params) {
      try {
        const url = `http://localhost:3000/products?q=${params}`
        const res = await axios.get(url)

        this.products = res.data
      } catch (err) {
        console.log(err)
      }
    },

    handleKeyword(e) {
      if (e.target.value) {
        this.getSpecificProduct(e.target.value)
      } else {
        this.getAllProducts()
      }
    },
  },

  mounted() {
    this.getAllProducts()
  },
}
</script>
