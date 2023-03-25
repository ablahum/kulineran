<template>
  <div
    class="col-lg-4 col-md-6 col-12 mb-4"
    v-for="product in products"
    :key="product.id"
  >
    <div class="card shadow rounded">
      <img
        :src="'products/' + product.image"
        class="card-img-top img-thumbnail"
        alt="product image"
      />
      <div class="card-body">
        <h4 class="card-title fw-bold mb-0">{{ product.name }}</h4>

        <p class="card-text mt-2 mb-3">Harga: Rp. {{ product.price }}</p>

        <router-link
          :to="'/products/' + product.id"
          class="btn btn-primary"
          ><font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            class="me-2"
          />PESAN</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodCardComp',

  props: {
    products: Object,
  },
}
</script>
