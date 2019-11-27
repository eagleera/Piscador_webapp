<template>
  <d-container fluid>
    <div class="row">
      <div class="col-12 offset-md-4 col-md-4">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="img-container col-12 tc">
              <img class="m-auto" src="@/assets/logo_black.png" alt />
            </div>
          </div>
          <div class="card-body pt2">
            <h4 class="mb0 mt0" id="title">Registrarme</h4>
            <div class="form-group mt3">
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
              <label for="nombre">Apellido</label>
              <input
                id="apellido"
                type="text"
                v-model="lastname"
                placeholder="Terrazas"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <input id="password" type="password" class="form-control" v-model="password" />
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
              <button id="registerBtn" class="btn btn-primary col-12" @click="register">Registrarme</button>
            </div>
            <div class="col-12 tc mt3">
              <a href="/">¿Ya tienes una cuenta? Inicia sesión</a>
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
      lastname: "",
      password: "",
      password_confirmation: "",
      role: "Admin"
    };
  },
  methods: {
    register() {
      if (this.password == this.password_confirmation) {
        this.$store.dispatch(`${storeModule}/tryRegister`, {
          email: this.email,
          name: this.name,
          lastname: this.lastname,
          password: this.password,
          role: this.role
        });
      }else{
        console.log("nah")
      }
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
