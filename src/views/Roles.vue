<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1>Roles</h1>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="card">Agregar Nuevo</div>
      </div>
      <div class="col-4">
        <div class="card">
          <div class="border-bottom card-header">
            <h6 class="mb0">Nombre</h6>
          </div>
          <div class="list-group list-group-flush">
            <div class="p3 list-group-item">
              <div class="row">
                <div class="col">
                  <form action>
                    <div class="form-row">
                      <div class="form-group col-12">
                        <label for="price">Paga</label>
                        <input
                          id="price"
                          type="text"
                          placeholder="$300"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>
