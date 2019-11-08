<template>
  <d-container fluid>
    <d-row>
      <!-- Main Sidebar -->
      <main-sidebar />
      <d-col
        class="main-content offset-lg-2 offset-md-3 p-0"
        tag="main"
        lg="10"
        md="9"
        sm="12"
      >
        <!-- Main Navbar -->
        <main-navbar />

        <!-- Content -->
        <router-view></router-view>

        <!-- Main Footer -->
        <main-footer />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
// @ is an alias to /src
import MainNavbar from "@/components/layout/MainNavbar.vue";
import MainSidebar from "@/components/layout/MainSidebar.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
import { mapGetters } from "vuex";

let storeModuleRanch = "ranch";
let storeModuleSession = "session";

export default {
  name: "home",
  components: {
    MainNavbar,
    MainSidebar,
    MainFooter
  },
  computed: {
    ...mapGetters(storeModuleRanch, ["getRanch"])
  },
  created() {
    if (this.getRanch) {
      console.log(this.getRanch);
    } else {
      this.$store.dispatch(`${storeModuleSession}/me`);
    }
  }
};
</script>

<style lang="scss">
.toasted-primary {
  padding: 15px 40px;
  right: -70px;
  top: 20px;
  &.success {
    background-color: #19c671 !important;
  }
  .action {
    color: white !important;
  }
}
</style>
