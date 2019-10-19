<template>
  <d-container fluid>
    <div class="row">
      <div class="offset-4 col-4">
        <div class="card">
          <div class="card-header border-bottom">
            <h1 class="mb0 mt0">Iniciar Sesión</h1>
          </div>
          <div class="card-body">
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
                type="submit"
                v-on:click="login"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>

<script>
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
        .then(() => {
          this.$router.push("/home");
        });
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
