<template>
  <div class="ablahum">
    <h1>ini route untuk ablahum</h1>

    <p>hahaha</p>

    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AblahumView',
  props: {
    message: String,
  },
};
</script>
