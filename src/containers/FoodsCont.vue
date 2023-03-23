<template>
  <div class="py-5">
    <div class="row mb-4">
      <div class="col">
        <h2>Daftar <span class="fw-bold">Makanan</span></h2>
      </div>

      <div class="col">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Cari makanan..."
            aria-label="search"
            aria-describedby="basic-addon1"
            @keyup="keyword"
          />

          <span
            class="input-group-text"
            id="basic-addon1"
            ><font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="me-2"
            />
          </span>
        </div>
      </div>
    </div>

    <div class="row">
      <FoodCardComp :products="products" />
    </div>
  </div>
</template>

<script>
import { FoodCardComp } from '@/components'

export default {
  name: 'FoodsCont',
  components: { FoodCardComp },
  props: {
    products: Object,
    keyword: Function,
  },
}
</script>
