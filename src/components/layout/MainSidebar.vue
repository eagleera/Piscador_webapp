<template>
  <aside
    :class="[
      'main-sidebar',
      'col-12',
      'col-md-3',
      'col-lg-2',
      'px-0',
      sidebarVisible ? 'open' : ''
    ]"
  >
    <div class="main-navbar">
      <nav
        class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0"
      >
        <a class="navbar-brand w-100 mr-0" href="/" style="line-height: 25px;">
          <div class="d-table m-auto">
            <!-- <img
              id="main-logo"
              class="d-inline-block align-top mr-1"
              style="max-width: 25px;"
              src="@/assets/logo.png"
              alt="Piscador"
            /> -->
            <font-awesome-icon icon="leaf" size="2x" />
            <span class="d-none d-md-inline ml-1 v-btm-txt">
              Piscador
            </span>
          </div>
        </a>
        <a
          class="toggle-sidebar d-sm-inline d-md-none d-lg-none"
          @click="handleToggleSidebar()"
        >
          <font-awesome-icon icon="hand-point-left" size="lg" />
        </a>
      </nav>
    </div>

    <form
      action="#"
      class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none"
    >
      <div class="input-group input-group-seamless ml-3">
        <div class="input-group-prepend">
          <font-awesome-icon icon="search" />
        </div>
        <input
          class="navbar-search form-control"
          type="text"
          placeholder="Busca algo..."
          aria-label="Search"
        />
      </div>
    </form>

    <div class="nav-wrapper">
      <d-nav class="flex-column">
        <li class="nav-item dropdown">
          <d-link class="nav-link" to="/workers">
            <font-awesome-icon icon="users" class="mr2" />
            <span>Trabajadores</span>
            <div class="item-icon-wrapper" />
          </d-link>
        </li>
        <li class="nav-item dropdown">
          <d-link class="nav-link" to="/roles">
            <font-awesome-icon icon="chess" class="mr2" />
            <span>Roles</span>
            <div class="item-icon-wrapper" />
          </d-link>
        </li>
        <li class="nav-item dropdown">
          <d-link class="nav-link" to="/assistance">
            <font-awesome-icon icon="clipboard-check" class="mr2" />
            <span>Asistencia</span>
            <div class="item-icon-wrapper" />
          </d-link>
        </li>
        <li class="nav-item dropdown">
          <d-link class="nav-link" to="/diary">
            <font-awesome-icon icon="book" class="mr2" />
            <span>Diario</span>
            <div class="item-icon-wrapper" />
          </d-link>
        </li>
      </d-nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: "main-sidebar",
  data() {
    return {
      sidebarVisible: false
    };
  },
  created() {
    this.$eventHub.$on("toggle-sidebar", this.handleToggleSidebar);
  },
  beforeDestroy() {
    this.$eventHub.$off("toggle-sidebar");
  },
  methods: {
    handleToggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  }
};
</script>

<style lang="scss">
.main-sidebar {
  .item-icon-wrapper {
    display: inline-block;
  }
  .dropdown-menu {
    display: block;
  }
}
.v-btm-txt {
  vertical-align: text-bottom;
}
</style>
