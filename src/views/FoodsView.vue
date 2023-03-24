<template>
  <div class="foods container">
    <NavbarCont />

    <FoodsCont
      :products="products"
      :keyword="handleSearch"
    />
  </div>
</template>

<script>
import { getAllProducts, getProductBySearch } from '@/apis'
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
    async getAll() {
      try {
        const res = await getAllProducts()

        this.products = res.data
      } catch (err) {
        console.log(err)
      }
    },

    async getOne(params) {
      try {
        const res = await getProductBySearch(params)

        this.products = res.data
      } catch (err) {
        console.log(err)
      }
    },

    handleSearch(e) {
      if (e.target.value) {
        this.getOne(e.target.value)
      } else {
        this.getAll()
      }
    },
  },

  mounted() {
    this.getAll()
  },
}
</script>
