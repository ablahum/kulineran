<template>
  <div class="home">
    <div class="container">
      <NavbarComp />

      <HeroComp />
    </div>

    <!-- <FooterComp /> -->
  </div>
</template>

<script>
import { NavbarComp, HeroComp, FooterComp } from '@/components';

export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    HeroComp,
    FooterComp,
  },
};
</script>
