<template>
  <d-container fluid>
    <div class="row">
      <div class="col-12 col-md-4 offset-md-4">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="img-container col-12 tc">
              <img class="m-auto" src="@/assets/logo_black.png" alt="" />
            </div>
          </div>
          <div class="card-body pt2">
            <h4 class="mb0 mt0" id="titleLogin">Iniciar Sesión</h4>
            <div class="form-group mt3">
              <label for="email">Email</label>
              <d-input
                id="email"
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="email"
                type="email"
                placeholder="email@ejemplo.com"
                required
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
            <div class="col-12 pa0" v-if="error">
              <d-alert theme="danger" show>
                Contraseña o usuario invalidos
              </d-alert>
            </div>
            <div class="col-12 pa0">
              <button id="loginBtn" class="btn btn-primary col-12" @click="login">
                Iniciar sesión
              </button>
            </div>
            <div class="col-12 tc mt3">
              <a id="registerAnchor" href="/register">¿Aún no tienes una cuenta? Registrate aquí</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>

<script>
import { mapGetters } from "vuex";
let storeModule = "session";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch(`${storeModule}/tryLogin`, {
          email: this.email,
          password: this.password
        })
        .then(res => {
          if (res.response) {
            console.log();
            if (!res.response.data.response.status) {
              this.error = true;
            }
          }
        });
    }
  },
  computed: {
    ...mapGetters(storeModule, ["getLoggedIn", "getUser"])
  },
  created() {
    if (this.getUser) {
      this.$toasted.show(
        "¡Tu usuario ha sido creado! Ahora puedes iniciar sesión",
        {
          type: "success",
          icon: "thumbs-up",
          action: {
            text: "Okay",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        }
      );
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
