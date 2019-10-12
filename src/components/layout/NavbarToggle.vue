<template>
  <nav class="nav">
    <a
      href="#"
      @click="handleClick()"
      class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center"
    >
      <font-awesome-icon icon="bars" size="2x" class="mt2" />
    </a>
  </nav>
</template>

<script>
export default {
  name: "navbar-toggle",
  methods: {
    handleClick() {
      this.$eventHub.$emit("toggle-sidebar");
    }
  }
};
</script>
