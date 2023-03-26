<template>
  <div class="py-5">
    <div class="row mb-4">
      <BreadcrumbComp />

      <div class="col">
        <TitleComp
          :subtitle="'Keranjang'"
          :title="'Saya'"
        />
      </div>
    </div>

    <div class="table-responsive p-xl-4 mb-0">
      <TableComp
        :items="items"
        :totalPrice="totalPrice"
        :deleteItem="deleteItem"
      />
    </div>
  </div>
</template>

<script>
import { BreadcrumbComp, TableComp, TitleComp } from '@/components'

export default {
  name: 'CartCont',
  components: { BreadcrumbComp, TableComp, TitleComp },

  props: {
    items: Array,
    totalPrice: Function,
    deleteItem: Function,
  },
}
</script>
