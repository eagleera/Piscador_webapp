<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1 class="dib">Asistencia</h1>
      <d-input-group
        size="sm"
        class="date-range justify-content-left w-auto-ns inline-flex ml4"
      >
        <d-datepicker placeholder="Start Date" typeable small />
        <d-input-group-text slot="append">
          <font-awesome-icon icon="search" />
        </d-input-group-text>
      </d-input-group>
      <button class="btn btn-primary float-right mt4">Guardar</button>
    </div>
    <div class="row mt4">
      <div class="col-8 offset-2">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Lista de empleados</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center ">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0" width="100">#</th>
                  <th scope="col" class="border-0">Nombre</th>
                  <th scope="col" class="border-0 tl" width="150">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>
                    <d-checkbox toggle class="custom-toggle-sm" checked/>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark</td>
                  <td>
                    <d-checkbox toggle class="custom-toggle-sm" />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry</td>
                  <td>
                    <d-checkbox toggle class="custom-toggle-sm" />
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Colt</td>
                  <td>
                    <d-checkbox toggle class="custom-toggle-sm" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary float-right mr3">Guardar</button>
  </d-container>
</template>
