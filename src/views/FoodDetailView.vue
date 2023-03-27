<template>
  <NavbarCont />

  <div class="food-detail container">
    <FoodDetailCont
      :product="product"
      :order="order"
      :createOrder="createOrder"
    />
  </div>

  <FooterCont />
</template>

<script>
import { createOrder, getSpecificProduct } from '@/apis'
import { FoodDetailCont, NavbarCont, FooterCont } from '@/containers'

export default {
  name: 'FoodDetailVue',
  components: { FoodDetailCont, NavbarCont, FooterCont },

  data() {
    return {
      product: {},
      order: {},
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

    async createOrder() {
      try {
        this.order.products = this.product

        if (this.order.amount) {
          await createOrder(this.order)

          this.$toast.success('Berhasil menambahkan ke keranjang', {
            type: 'success',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          })
        } else {
          this.$toast.error('Jumlah pesanan harus diisi', {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          })
        }
      } catch (err) {
        console.error(err)
      }
    },
  },

  mounted() {
    this.getOne()
  },
}
</script>
