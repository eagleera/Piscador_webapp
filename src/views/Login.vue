<template>
  <d-container fluid>
    <div class="row">
      <div class="col-12 col-md-4 offset-md-4">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="img-container col-12 tc">
              <img class="m-auto" src="@/assets/logo_black.png" alt="">
            </div>
          </div>
          <div class="card-body pt2">
            <h1 class="mb0 mt0">Iniciar Sesión</h1>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="dd@gg.com"
                v-model="email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input
                id="password"
                type="password"
                class="form-control"
                v-model="password"
              />
            </div>
            <div class="col-12 pa0">
              <button
                class="btn btn-primary col-12"
                v-on:click="login"
              >
                Iniciar sesión
              </button>
            </div>
            <div class="col-12 tc mt3">
              <a href="/register">¿Aún no tienes una cuenta? Registrate aquí</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>

<script>
import { mapGetters } from 'vuex';
let storeModule = "session";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch(`${storeModule}/tryLogin`, {
          email: this.email,
          password: this.password
        })
    }
  },
  computed: {
    ...mapGetters(storeModule, ["getLoggedIn", "getUser"])
  },
  created() {
    if(this.getUser) { 
      this.$toasted.show('¡Tu usuario ha sido creado! Ahora puedes iniciar sesión', {
        type: 'success',
        icon: 'thumbs-up',
        action: {
          text : 'Okay',
          onClick : (e, toastObject) => {
              toastObject.goAway(0);
          }
        }
      });
      this.email = this.getUser.email;
    }
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  height: 100vh;
  .row {
    height: 100%;
    align-items: center;
  }
}
</style>
