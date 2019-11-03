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
        <a class="navbar-brand w-100 mr-0" style="line-height: 25px;">
          <div class="col-12 tc">
            <img
              id="main-logo"
              class="max-h-100"
              src="@/assets/logo_black.png"
              alt="Logo pizcador"
            />
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
    <div class="nav-wrapper">
      <d-nav class="flex-column">
        <li class="nav-item" @click="handleToggleSidebar">
          <d-link class="nav-link" to="/workers">
            <font-awesome-icon icon="users" class="mr2" />
            <span>Trabajadores</span>
            <div class="item-icon-wrapper" />
          </d-link>
        </li>
        <li class="nav-item" @click="handleToggleSidebar">
          <d-link class="nav-link" to="/roles">
            <font-awesome-icon icon="chess" class="mr2" />
            <span>Roles</span>
            <div class="item-icon-wrapper" />
          </d-link>
        </li>
        <li class="nav-item" @click="handleToggleSidebar">
          <d-link class="nav-link" to="/assistance">
            <font-awesome-icon icon="clipboard-check" class="mr2" />
            <span>Asistencia</span>
            <div class="item-icon-wrapper" />
          </d-link>
        </li>
        <li class="nav-item" @click="handleToggleSidebar">
          <d-link class="nav-link" to="/payday">
            <font-awesome-icon icon="money-bill-wave" class="mr2" />
            <span>Paga</span>
            <div class="item-icon-wrapper" />
          </d-link>
        </li>
        <!-- <li class="nav-item" @click="handleToggleSidebar">
          <d-link class="nav-link" to="/diary">
            <font-awesome-icon icon="book" class="mr2" />
            <span>Diario</span>
            <div class="item-icon-wrapper" />
          </d-link>
        </li> -->
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
.max-h-100{
  max-height: 100%;
}
.nav-link{
  cursor: pointer;
}
.v-btm-txt {
  vertical-align: text-bottom;
}
</style>
