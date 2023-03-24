<template>
  <div class="food-detail container">
    <NavbarCont />

    <FoodDetailCont :product="product" />
  </div>
</template>

<script>
import { getSpecificProduct } from '@/apis'
import { FoodDetailCont, NavbarCont } from '@/containers'

export default {
  name: 'FoodDetailVue',
  components: { FoodDetailCont, NavbarCont },

  data() {
    return {
      product: [],
    }
  },

  methods: {
    async getOne() {
      try {
        const res = await getSpecificProduct(this.$route.params.id)

        this.product = res.data
      } catch (err) {
        console.log(err)
      }
    },
  },

  mounted() {
    this.getOne()
  },
}
</script>
