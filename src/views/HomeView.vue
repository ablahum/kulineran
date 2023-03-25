<template>
  <NavbarCont />

  <div class="home container">
    <HeroCont />

    <BestFoodsCont :products="products" />
  </div>

  <FooterCont />
</template>

<script>
import { getBestProducts } from '@/apis'
import { FooterCont, HeroCont, NavbarCont, BestFoodsCont } from '@/containers'

export default {
  name: 'HomeView',
  components: { NavbarCont, HeroCont, FooterCont, BestFoodsCont },

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
