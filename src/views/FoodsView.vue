<template>
  <div class="foods container">
    <NavbarComp />

    <h1>Daftar makanan</h1>

    <FooterComp />
  </div>
</template>

<script>
import { FooterComp, NavbarComp } from '@/components'

export default {
  name: 'FoodsView',
  components: { NavbarComp, FooterComp },
}
</script>
