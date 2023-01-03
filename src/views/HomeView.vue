<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />

    <HelloWorld
      msg="Welcome to Your Vue.js App"
      vueCliDocs="vue-cli documentation"
    />

    <HelloWorld
      msg="Selamat datang di aplikasi Vue.js Anda"
      vueCliDocs="dokumentasi vue-cli"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
