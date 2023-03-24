<template>
  <div class="home container">
    <NavbarCont />

    <HeroCont />

    <BestFoodsCont :products="products" />

    <!-- <FooterCont /> -->
  </div>
</template>

<script>
import { getBestProducts } from '@/apis'
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
    async getProducts() {
      try {
        const res = await getBestProducts()

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
