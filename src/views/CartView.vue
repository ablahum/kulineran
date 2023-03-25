<template>
  <NavbarCont />

  <div class="cart container">
    <h1>cart</h1>
  </div>

  <FooterCont />
</template>

<script>
import { NavbarCont, FooterCont } from '@/containers'

export default {
  name: 'CartView',
  components: { NavbarCont, FooterCont },
}
</script>
