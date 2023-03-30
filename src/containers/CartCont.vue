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

    <div class="table-responsive row p-xl-4 mb-0">
      <TableComp
        :items="items"
        :totalPrice="totalPrice"
        :deleteItem="deleteItem"
      />
    </div>

    <div class="row justify-content-end">
      <div class="col-md-4">
        <form v-on:submit.prevent>
          <div class="my-3">
            <div class="form-group">
              <label
                for="name"
                class="form-label"
                >Nama:</label
              >

              <input
                type="text"
                class="form-control"
                v-model="order.name"
              />
            </div>

            <div class="form-group">
              <label
                for="table"
                class="form-label"
                >Nomor Meja:</label
              >

              <input
                type="text"
                class="form-control"
                v-model="order.table"
              />
            </div>
          </div>

          <div class="d-flex justify-content-between">
            <ButtonComp
              :destination="'/foods'"
              :btnType="'btn-outline-primary col-5 fw-bold'"
              :iconName="'fa-arrow-left'"
              :title="'KEMBALI'"
            />

            <button
              type="submit"
              class="btn btn-primary col-6 fw-bold"
              @click="checkout"
            >
              CHECKOUT
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ButtonComp, BreadcrumbComp, TableComp, TitleComp } from '@/components'

export default {
  name: 'CartCont',
  components: { ButtonComp, BreadcrumbComp, TableComp, TitleComp },

  props: {
    items: Array,
    totalPrice: Function,
    deleteItem: Function,
    order: Object,
    checkout: Function,
  },
}
</script>
