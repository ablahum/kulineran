<template>
  <div class="py-5">
    <div class="row mb-4">
      <BreadcrumbComp />

      <div class="col-6">
        <h2>Menu <span class="fw-bold">Terbaik</span></h2>
      </div>

      <div class="col-6 text-end">
        <ButtonComp
          :destination="'/foods'"
          :btnType="'btn-outline-primary'"
          :iconName="'fa-eye'"
          :title="'Lihat semua'"
        />
      </div>
    </div>

    <div class="row">
      <FoodCardComp :products="products" />
    </div>
  </div>
</template>

<script>
import { FoodCardComp, ButtonComp, BreadcrumbComp } from '@/components'

export default {
  name: 'BestFoodsCont',
  components: { FoodCardComp, ButtonComp, BreadcrumbComp },
  props: {
    products: Object,
  },
}
</script>
