<template>
  <div class="py-md-5 py-4">
    <div class="d-flex justify-content-between mb-4">
      <div>
        <h2>Best <span class="fw-bold">Foods</span></h2>
      </div>

      <div>
        <router-link
          to="/foods"
          class="btn btn-outline-primary float-right"
          ><font-awesome-icon
            icon="fa-solid fa-eye"
            class="me-2"
          />Lihat semua</router-link
        >
      </div>
    </div>

    <CardProductComp :products="products" />
  </div>
</template>

<script>
import CardProductComp from './CardProductComp'

export default {
  name: 'BestFoodsComp',
  components: { CardProductComp },
  props: {
    products: Object,
  },
}
</script>
