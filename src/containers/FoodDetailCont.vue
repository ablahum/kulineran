<template>
  <div class="py-5">
    <div class="row mb-4">
      <BreadcrumbComp />

      <div class="col">
        <TitleComp
          :subtitle="'Detail'"
          :title="'Makanan'"
        />
      </div>
    </div>

    <div class="row p-xl-4">
      <div class="col-lg-6">
        <img
          :src="product.image"
          alt="product image"
          class="img-fluid w-100 rounded shadow"
        />
      </div>

      <div class="col-lg-6 mt-lg-0 mt-4">
        <div class="mb-3">
          <h3 class="fw-bold mb-2">{{ product.name }}</h3>

          <h4>
            Harga: Rp. <span class="fw-bold">{{ product.price }}</span>
          </h4>

          <hr class="mt-2 mb-0" />
        </div>

        <form v-on:submit.prevent>
          <div class="my-3">
            <div class="form-group">
              <label
                for="amount"
                class="form-label"
                >Jumlah Pesanan:</label
              >

              <input
                type="number"
                class="form-control"
                v-model="order.amount"
              />
            </div>

            <div class="form-group">
              <label
                for="info"
                class="form-label"
                >Keterangan:</label
              >

              <textarea
                class="form-control"
                id="info"
                placeholder="Keterangan: (Pedas, Nasi Setengah, dll.)"
                v-model="order.info"
              ></textarea>
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
              @click="addOne"
            >
              <font-awesome-icon
                icon="fa-solid fa-cart-shopping"
                class="me-2"
              />PESAN MAKANAN
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { BreadcrumbComp, TitleComp, ButtonComp } from '@/components'

export default {
  name: 'FoodDetailCont',
  components: { BreadcrumbComp, TitleComp, ButtonComp },
  props: {
    product: Object,
    order: Object,
    addOne: Function,
  },
}
</script>
