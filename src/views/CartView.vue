<template>
  <NavbarCont :updateCart="items" />

  <div class="cart container">
    <CartCont
      :items="items"
      :totalPrice="totalPrice"
      :deleteItem="deleteOne"
    />
  </div>

  <FooterCont />
</template>

<script>
import { deleteCartItem, getCart } from '@/apis'
import { NavbarCont, FooterCont, CartCont } from '@/containers'

export default {
  name: 'CartView',
  components: { NavbarCont, FooterCont, CartCont },

  data() {
    return {
      items: [],
    }
  },

  methods: {
    async getAll() {
      try {
        const res = await getCart()

        this.items = res.data
      } catch (err) {
        console.log(err)
      }
    },

    async deleteOne(id) {
      try {
        await deleteCartItem(id)

        this.$toast.success('Berhasil menghapus item', {
          type: 'success',
          position: 'top-right',
          duration: 3000,
          dismissible: true,
        })

        this.getAll()
      } catch (err) {
        console.log(err)
      }
    },
  },

  mounted() {
    this.getAll()
  },

  computed: {
    totalPrice() {
      return this.items.reduce(function (asd, data) {
        return asd + data.products.price * data.amount
      }, 0)
    },
  },
}
</script>
