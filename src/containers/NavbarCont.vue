<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
    <div class="container">
      <a
        href="#"
        class="navbar-brand fw-bold"
        >KULINERAN</a
      >

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
              >Beranda</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/foods"
              >Makanan</router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/cart"
              >KERANJANG

              <font-awesome-icon
                icon="fa-solid fa-bag-shopping"
                class="mx-2"
              />

              <span class="badge bg-primary">{{ cartAmount }}</span>
            </router-link>
          </li>
        </ul>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { getCart } from '@/apis'

export default {
  name: 'NavbarCont',

  data() {
    return {
      cartAmount: 0,
    }
  },

  methods: {
    async getCartAmount() {
      try {
        const res = await getCart()

        this.cartAmount = res.data.length
      } catch (err) {
        console.log(err)
      }
    },
  },

  mounted() {
    this.getCartAmount()
  },
}
</script>
