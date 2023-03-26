<template>
  <div class="py-5">
    <div class="row mb-4">
      <BreadcrumbComp />

      <div class="col-6">
        <TitleComp
          :subtitle="'Daftar'"
          :title="'Makanan'"
        />
      </div>

      <div class="col-6">
        <SearchComp
          :placeholder="'Cari makanan...'"
          :keyup="keyword"
        />
      </div>
    </div>

    <div class="row">
      <FoodCardComp :products="products" />
    </div>
  </div>
</template>

<script>
import { TitleComp, FoodCardComp, BreadcrumbComp, SearchComp } from '@/components'

export default {
  name: 'FoodsCont',
  components: { TitleComp, FoodCardComp, BreadcrumbComp, SearchComp },
  props: {
    products: Object,
    keyword: Function,
  },
}
</script>
