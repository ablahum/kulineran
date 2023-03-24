<template>
  <div class="py-5">
    <div class="row mb-4">
      <BreadcrumbComp />

      <div class="col">
        <h2>Detail <span class="fw-bold">Makanan</span></h2>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <img
          :src="product.image"
          alt="product image"
        />
      </div>

      <div class="col-6">
        <h3>{{ product.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { BreadcrumbComp } from '@/components'

export default {
  name: 'FoodDetail',
  components: { BreadcrumbComp },
  props: {
    product: Object,
  },
}
</script>
