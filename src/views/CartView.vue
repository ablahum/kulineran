<template>
  <NavbarCont :updateCart="items" />

  <div class="cart container">
    <CartCont
      :items="items"
      :totalPrice="totalPrice"
      :deleteItem="deleteOne"
      :order="order"
      :checkout="checkout"
    />
  </div>

  <FooterCont />
</template>

<script>
import { createCheckout, deleteCartItem, getCart } from '@/apis'
import { NavbarCont, FooterCont, CartCont } from '@/containers'

export default {
  name: 'CartView',
  components: { NavbarCont, FooterCont, CartCont },

  data() {
    return {
      items: [],
      order: {},
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

    async checkout() {
      try {
        this.order.items = this.items

        if (this.order.name && this.order.table) {
          await createCheckout(this.order)

          this.$toast.success('Berhasil membuat pesanan', {
            type: 'success',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          })

          this.$router.push({ path: '/order-created' })

          this.items.map((item) => {
            return this.deleteOne(item.id)
          })
        } else {
          this.$toast.error('Nama dan nomor meja harus diisi', {
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          })
        }
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
