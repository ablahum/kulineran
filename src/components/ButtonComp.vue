<template>
  <router-link
    :to="destination"
    class="btn fw-normal"
    :class="btnType"
    ><font-awesome-icon
      :icon="'fa-solid ' + iconName"
      class="me-2"
    />{{ title }}</router-link
  >
</template>

<script>
export default {
  name: 'ButtonComp',
  props: {
    destination: String,
    title: String,
    btnType: String,
    iconName: String,
  },
}
</script>
