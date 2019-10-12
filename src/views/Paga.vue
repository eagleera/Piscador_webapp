<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1 class="dib">Día de paga</h1>
      <d-input-group
        size="sm"
        class="date-range justify-content-left w-auto-ns inline-flex ml4"
      >
        <d-datepicker placeholder="Fecha inicio" typeable />
        <d-datepicker placeholder="Fecha fin" typeable />
        <d-input-group-text slot="append">
          <font-awesome-icon icon="search" />
        </d-input-group-text>
      </d-input-group>
      <button class="btn btn-primary float-right mt4">Imprimir</button>
    </div>
    <div class="row mt4">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Lista de la semana</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center ">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0" width="100">#</th>
                  <th scope="col" class="border-0">Nombre</th>
                  <th scope="col" class="border-0 tl">Lunes</th>
                  <th scope="col" class="border-0 tl">Martes</th>
                  <th scope="col" class="border-0 tl">Miercoles</th>
                  <th scope="col" class="border-0 tl">Jueves</th>
                  <th scope="col" class="border-0 tl">Viernes</th>
                  <th scope="col" class="border-0 tl">Sabado</th>
                  <th scope="col" class="border-0 tl">Domingo</th>
                  <th scope="col" class="border-0 tl">$500</th>
                  <th scope="col" class="border-0 tl">$200</th>
                  <th scope="col" class="border-0 tl">$100</th>
                  <th scope="col" class="border-0 tl">$50</th>
                  <th scope="col" class="border-0 tl">$20</th>
                  <th scope="col" class="border-0 tl">$10</th>
                  <th scope="col" class="border-0 tl">$5</th>
                  <th scope="col" class="border-0 tl">$2</th>
                  <th scope="col" class="border-0 tl">$1</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>
