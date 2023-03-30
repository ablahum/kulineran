<template>
  <div class="py-5">
    <div class="row">
      <div class="col text-center">
        <img
          src="../assets/waiting.png"
          alt="waiting"
          width="500"
          class="mb-3"
        />

        <TitleComp
          :subtitle="'Pesanan Berhasil'"
          :title="'Dibuat'"
        />

        <ButtonComp
          :destination="'/'"
          :btnType="'btn-outline-primary w-50 fw-bold mt-3'"
          :iconName="'fa-arrow-left'"
          :title="'KEMBALI KE BERANDA'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TitleComp, ButtonComp } from '@/components'

export default {
  name: 'NewOrderCont',
  components: { TitleComp, ButtonComp },
}
</script>
