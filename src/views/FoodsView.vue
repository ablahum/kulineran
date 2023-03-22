<template>
  <div class="foods container">
    <NavbarCont />

    <FoodsCont />

    <!-- <FooterCont /> -->
  </div>
</template>

<script>
import { FooterCont, FoodsCont, NavbarCont } from '@/containers'

export default {
  name: 'FoodsView',
  components: { NavbarCont, FooterCont, FoodsCont },
}
</script>
