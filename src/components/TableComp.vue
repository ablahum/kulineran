<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Foto</th>
        <th scope="col">Nama Makanan</th>
        <th scope="col">Keterangan</th>
        <th scope="col">Jumlah</th>
        <th scope="col">Harga</th>
        <th scope="col">Sub Total</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
      >
        <th scope="row">
          {{ item.id }}
        </th>
        <td>
          <img
            :src="'products/' + item.products.image"
            class="img-fluid shadow rounded"
            width="150"
            alt=""
          />
        </td>
        <td>
          {{ item.products.name }}
        </td>
        <td>{{ item.info ? item.info : '-' }}</td>
        <td class="fw-bold">
          {{ item.amount }}
        </td>
        <td>Rp. {{ item.products.price }}</td>
        <td class="fw-bold">Rp. {{ getSubtotal(item.products.price, item.amount) }}</td>
        <td>
          <button class="btn btn-outline-primary text-primary me-2">
            <font-awesome-icon icon="fa-solid fa-pen-to-square" />
          </button>

          <button
            class="btn btn-outline-danger"
            @click="deleteItem(item.id)"
          >
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </td>
      </tr>

      <tr>
        <td
          colspan="6"
          align="right"
        >
          Grand Total:
        </td>
        <td class="fw-bold">Rp. {{ totalPrice }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableComp',
  props: {
    items: Array,
    totalPrice: Function,
    deleteItem: Function,
  },

  methods: {
    getSubtotal(price, amount) {
      return price * amount
    },
  },
}
</script>
