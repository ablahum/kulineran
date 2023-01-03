<template>
  <div class="about">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />

    <HelloWorld
      msg="this is about"
      vueCliDocs="about page documentation"
    />

    <h1>{{ message }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'AboutView',
  components: {
    HelloWorld,
  },
  props: {
    message: String,
  },
};
</script>
