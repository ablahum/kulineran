<template>
  <div class="row">
    <div
      class="col-md-4 mb-5 mb-md-0"
      v-for="product in products"
      :key="product.id"
    >
      <div class="card shadow rounded">
        <img
          :src="'products/' + product.image"
          class="card-img-top"
          alt="product image"
        />
        <div class="card-body">
          <h4 class="card-title fw-bold mb-0">{{ product.name }}</h4>

          <p class="card-text mt-2 mb-3">Harga: Rp. {{ product.price }}</p>

          <a
            href="#"
            class="btn btn-primary"
            ><font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              class="me-2"
            />Pesan</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardProductComp',
  props: {
    products: Object,
  },
}
</script>
