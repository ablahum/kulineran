<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      aria-label="search"
      aria-describedby="basic-addon1"
      :placeholder="placeholder"
      @keyup="keyup"
    />

    <span
      class="input-group-text"
      id="basic-addon1"
      ><font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="me-2"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'SearchComp',
  props: {
    placeholder: String,
    keyup: Function,
  },
}
</script>
