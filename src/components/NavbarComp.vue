<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <a
      class="navbar-brand"
      href="#"
      >KULINERAN</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/"
            >Home</router-link
          >
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/foods"
            >Makanan</router-link
          >
        </li>
      </ul>

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/cart"
            >KERANJANG

            <font-awesome-icon
              icon="fa-solid fa-bag-shopping"
              class="ms-2 me-1"
            />

            <span class="badge bg-primary">99+</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp',
}
</script>
