<template>
  <h2>
    {{ subtitle }} <span class="fw-bold">{{ title }}</span>
  </h2>
</template>

<script>
export default {
  name: 'TitleComp',
  props: {
    title: String,
    subtitle: String,
  },
}
</script>
