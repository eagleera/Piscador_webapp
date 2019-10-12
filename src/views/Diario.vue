<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1 class="dib">Diario</h1>
      <d-input-group
        size="sm"
        class="date-range justify-content-left w-auto-ns inline-flex ml4"
      >
        <d-datepicker placeholder="Start Date" typeable small />
        <d-input-group-text slot="append">
          <font-awesome-icon icon="search" />
        </d-input-group-text>
      </d-input-group>
    </div>
    <div class="row">
      <div class="offset-2 col-8">
        <div class="card">
          <div class="border-bottom card-header">
            <h6 class="mb0">Nuevo registro</h6>
          </div>
          <div class="pa3">
            <form>
              <div class="form-group">
                <label for="toneladas">Toneladas</label>
                <input
                  id="toneladas"
                  type="number"
                  placeholder="32"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="toneladas">Notas</label>
                <textarea class="form-control" />
              </div>
              <div class="form-group tc">
                <button class="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt4">
      <div class="col-8 offset-2">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Historial</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">Día</th>
                  <th scope="col" class="border-0">Toneladas</th>
                  <th scope="col" class="border-0">Notas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark</td>
                  <td>Angela</td>
                  <td>Estonia</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry</td>
                  <td>Nathan</td>
                  <td>Cyprus</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Colt</td>
                  <td>Angela</td>
                  <td>Liberia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>
