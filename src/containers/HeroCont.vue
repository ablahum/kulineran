<template>
  <div class="d-flex flex-lg-row flex-column justify-content-between align-items-center py-5">
    <div class="order-lg-1 order-2 mt-lg-0 mt-4 d-flex flex-column align-items-start w-lg-50 w-100">
      <h1 class="fs-1"><span class="fw-bold">Makanan lezat,</span><br />dalam genggaman Anda.</h1>

      <p class="mt-3 mb-lg-4 mb-3 fs-4">Ayo segera pilih dan pesan<br class="d-lg-block d-none" />makanan favorit Anda!</p>

      <ButtonComp
        :destination="'/foods'"
        :btnType="'btn-primary'"
        :iconName="'fa-arrow-right'"
        :title="'PESAN SEKARANG'"
      />
    </div>

    <div class="order-lg-2 order-1 w-lg-50 w-100">
      <img
        src="../assets/hero.svg"
        alt="hero"
        class="w-100"
      />
    </div>
  </div>
</template>

<script>
import { ButtonComp } from '@/components'

export default {
  name: 'HeroCont',
  components: { ButtonComp },
}
</script>
