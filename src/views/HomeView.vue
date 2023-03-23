<template>
  <div class="home container">
    <NavbarCont />

    <HeroCont />

    <BestFoodsCont :products="products" />

    <!-- <FooterCont /> -->
  </div>
</template>

<script>
import axios from 'axios'
// import { FooterCont, HeroCont, NavbarCont, BestFoodsCont } from '@/containers'
import { HeroCont, NavbarCont, BestFoodsCont } from '@/containers'

export default {
  name: 'HomeView',
  // components: { NavbarCont, HeroCont, FooterCont, BestFoodsCont },
  components: { NavbarCont, HeroCont, BestFoodsCont },

  data() {
    return {
      products: [],
    }
  },

  methods: {
    async getBestProducts() {
      try {
        const url = 'http://localhost:3000/best-products'
        const res = await axios.get(url)

        this.products = res.data
      } catch (err) {
        console.log(err)
      }
    },
  },

  mounted() {
    this.getBestProducts()
  },
}
</script>
