<template>
  <div :class="['main-navbar', 'bg-white', stickyTop ? 'sticky-top' : '']">
    <d-navbar type="light" class="align-items-stretch flex-md-nowrap p-0">
      <!-- <navbar-search /> -->
      <!-- <navbar-nav :userName="userName" /> -->
      <navbar-toggle />
    </d-navbar>
  </div>
</template>

<script>
// import NavbarSearch from "./NavbarSearch.vue";
// import NavbarNav from "./NavbarNav.vue";
import NavbarToggle from "./NavbarToggle.vue";

export default {
  components: {
    // NavbarSearch,
    // NavbarNav,
    NavbarToggle
  },
  props: {
    stickyTop: {
      type: Boolean,
      default: true
    },
    userName: {
      type: String,
      default: "Desconocido o.O"
    }
  }
};
</script>

<style lang="scss">
.main-navbar {
  .dropdown-menu {
    display: block;
  }
}
</style>
