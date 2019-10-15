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
        <main-navbar :userName="getUser.name" />

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

let storeModule = "session";

export default {
  name: "home",
  components: {
    MainNavbar,
    MainSidebar,
    MainFooter
  },
  computed: {
    ...mapGetters(storeModule, ["getUser"])
  },
  methods: {
    getUserSession() {
      this.$store.dispatch(`${storeModule}/getUserSession`, { email: "1" });
    }
  },
  mounted() {
    this.getUserSession();
  }
};
</script>
