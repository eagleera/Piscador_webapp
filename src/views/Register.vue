<template>
  <d-container fluid>
    <div class="row">
      <div class="col-12 offset-md-4 col-md-4">
        <div class="card">
          <div class="card-header border-bottom">
            <h1 class="mb0 mt0">Registrarme</h1>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                v-model="email"
                placeholder="dd@gg.com"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input
                id="nombre"
                type="text"
                v-model="name"
                placeholder="Daniel"
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
            <div class="form-group">
              <label for="confirm_password">Confirmar contraseña</label>
              <input
                id="confirm_password"
                type="password"
                class="form-control"
                v-model="password_confirmation"
              />
            </div>
            <div class="col-12 pa0">
              <button class="btn btn-primary col-12" @:click.native="register">
                Registrarme
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
  name: "Register",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      password_confirmation: ""
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch(`${storeModule}/tryRegister`, {
          email: this.email,
          name: this.name,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
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
