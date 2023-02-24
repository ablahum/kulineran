<template>
  <div class="home container">
    <NavbarComp />

    <HeroComp />

    <FooterComp />
  </div>
</template>

<script>
import { FooterComp, HeroComp, NavbarComp } from '@/components'

export default {
  name: 'HomeView',
  components: { NavbarComp, HeroComp, FooterComp },
}
</script>
