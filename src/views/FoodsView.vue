<template>
  <div class="foods">
    <NavbarComp />

    <h2>Daftar Makanan</h2>

    <FooterComp />
  </div>
</template>

<script>
import { NavbarComp, FooterComp } from '@/components';

export default {
  name: 'FoodsView',
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>
