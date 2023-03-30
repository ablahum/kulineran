<template>
  <NavbarCont />

  <div class="new-order container">
    <NewOrderCont />
  </div>

  <FooterCont />
</template>

<script>
import { NewOrderCont, NavbarCont, FooterCont } from '@/containers'

export default {
  name: 'NewOrderView',
  components: { NewOrderCont, NavbarCont, FooterCont },
}
</script>
