<template>
  <div class="d-flex flex-lg-row flex-column justify-content-between align-items-center py-5">
    <div class="d-flex flex-column align-items-start w-50">
      <h2><strong>Makanan lezat,</strong><br />dalam genggaman Anda.</h2>

      <p class="mt-3 mb-4">Ayo segera pilih dan pesan makanan favorit Anda!</p>

      <rounter-link
        to="/"
        class="btn btn-primary"
        ><font-awesome-icon
          icon="fa-solid fa-arrow-right"
          class="me-2"
        />PESAN SEKARANG</rounter-link
      >
    </div>

    <div class="w-50">
      <img
        src="../assets/hero.svg"
        alt="hero"
        class="w-100"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroComp',
}
</script>
