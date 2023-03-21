<template>
  <div class="home container">
    <NavbarComp />

    <HeroComp />

    <BestFoodsComp :products="products" />

    <!-- <FooterComp /> -->
  </div>
</template>

<script>
import axios from 'axios'
import { FooterComp, HeroComp, NavbarComp, BestFoodsComp } from '@/components'

export default {
  name: 'HomeView',
  components: { NavbarComp, HeroComp, FooterComp, BestFoodsComp },

  data() {
    return {
      products: [],
    }
  },

  methods: {
    async getProducts() {
      try {
        const res = await axios.get('http://localhost:3000/best-products')

        this.products = res.data
      } catch (err) {
        console.log(err)
      }
    },
  },

  mounted() {
    this.getProducts()
  },
}
</script>
