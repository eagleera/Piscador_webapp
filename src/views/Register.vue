<template>
  <d-container fluid>
    <div class="row">
      <div class="offset-4 col-4">
        <div class="card">
          <div class="card-header border-bottom">
            <h1 class="mb0 mt0">Registrarme</h1>
          </div>
          <div class="card-body">
            <form action>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="dd@gg.com"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Daniel"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input id="password" type="password" class="form-control" />
              </div>
              <div class="form-group">
                <label for="confirm_password">Confirmar contraseña</label>
                <input
                  id="confirm_password"
                  type="password"
                  class="form-control"
                />
              </div>
              <div class="col-12 pa0">
                <button class="btn btn-primary col-12" type="submit">
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>

<style lang="scss" scoped>
.container-fluid {
  height: 100vh;
  .row {
    height: 100%;
    align-items: center;
  }
}
</style>
