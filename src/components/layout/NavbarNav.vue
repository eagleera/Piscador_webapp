<template>
  <d-navbar-nav class="border-left flex-row">
    <!-- <li class="nav-item border-right dropdown notifications">
      <a class="nav-link nav-link-icon text-center" v-d-toggle.notifications>
        <div class="nav-link-icon__wrapper">
          <font-awesome-icon icon="bell" size="2x" class="mt2" />
          <d-badge pill theme="danger">2</d-badge>
        </div>
      </a>
      <d-collapse id="notifications" class="dropdown-menu dropdown-menu-small">
        <d-dropdown-item>
          <div class="notification__icon-wrapper">
            <div class="notification__icon">
              <i class="material-icons">&#xE6E1;</i>
            </div>
          </div>
          <div class="notification__content">
            <span class="notification__category">Analytics</span>
            <p>
              Your website’s active users count increased by
              <span class="text-success text-semibold">28%</span>
              in the last week. Great job!
            </p>
          </div>
        </d-dropdown-item>
        <d-dropdown-item href="#">
          <div class="notification__icon-wrapper">
            <div class="notification__icon">
              <i class="material-icons">&#xE8D1;</i>
            </div>
          </div>
          <div class="notification__content">
            <span class="notification__category">Sales</span>
            <p>
              Last week your store’s sales count decreased by
              <span class="text-danger text-semibold">5.52%</span>
              . It could have been worse!
            </p>
          </div>
        </d-dropdown-item>
        <d-dropdown-item class="notification__all text-center">
          View all Notifications
        </d-dropdown-item>
      </d-collapse>
    </li>-->
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle text-nowrap px-3"
        v-d-toggle.user-actions
      >
        <img
          class="user-avatar rounded-circle mr-2"
          src="@/assets/logo.png"
          alt="User Avatar"
        />
        <span class="d-none d-md-inline-block">
          {{ getRanch ? getRanch.name : nombre }}
        </span>
      </a>
      <d-collapse id="user-actions" class="dropdown-menu dropdown-menu-small">
        <d-dropdown-item href="changeRanch">
          <font-awesome-icon icon="exchange-alt" />
          Cambiar rancho
        </d-dropdown-item>
        <d-dropdown-item href="logout">
          <font-awesome-icon icon="sign-out-alt" />
          Logout
        </d-dropdown-item>
      </d-collapse>
    </li>
  </d-navbar-nav>
</template>

<style>
.nav-link:hover {
  cursor: pointer;
}
.main-navbar .navbar .nav-link {
  min-width: 10rem !important;
}
</style>

<script>
let storeModuleRanch = "ranch";

import { mapGetters } from "vuex";

export default {
  name: "navBar",
  data() {
    return {
      nombre: ""
    };
  },
  computed: {
    ...mapGetters(storeModuleRanch, ["getRanch"])
  }
};
</script>
