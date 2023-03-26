<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb mb-2">
      <li
        class="breadcrumb-item"
        aria-current="page"
      >
        <router-link
          to="/"
          class="text-dark text-decoration-none"
          >Home</router-link
        >
      </li>

      <li
        class="breadcrumb-item"
        aria-current="page"
      >
        <router-link
          to="/foods"
          class="text-dark text-decoration-none"
          >Foods</router-link
        >
      </li>

      <li
        class="breadcrumb-item"
        aria-current="page"
      >
        <router-link
          to="/products"
          class="text-dark text-decoration-none"
          >Food Details</router-link
        >
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbComp',
}
</script>
