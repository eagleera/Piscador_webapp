<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1 class="dib">Asistencia</h1>
      <d-input-group
        size="sm"
        class="date-range justify-content-left w-auto-ns inline-flex ml4"
      >
        <d-datepicker
          placeholder="Fecha"
          v-model="date"
          @input="obtainAttendance"
          typeable
          small
        />
        <d-input-group-text slot="append">
          <font-awesome-icon icon="search" />
        </d-input-group-text>
      </d-input-group>
    </div>
    <div class="row mt4">
      <div class="col-12 col-sm-8 offset-sm-2">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Lista de empleados</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center ">
            <table class="table mb-0" v-if="getAttendance.length == 0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0" width="100">#</th>
                  <th scope="col" class="border-0">Nombre</th>
                  <th scope="col" class="border-0 tl" width="150">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(worker, index) in getWorkers" :key="worker.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ worker.nombre }}</td>
                  <td>
                    <d-checkbox
                      toggle
                      class="custom-toggle-sm"
                      checked
                      v-model="worker.attendance"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="table mb-0" v-else>
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0" width="100">#</th>
                  <th scope="col" class="border-0">Nombre</th>
                  <th scope="col" class="border-0 tl" width="150">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(worker, index) in getAttendance" :key="worker.id">
                  <td>{{ index }}</td>
                  <td>{{ worker.worker.nombre }}</td>
                  <td>
                    <d-checkbox
                      toggle
                      class="custom-toggle-sm"
                      checked
                      v-model="worker.status"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <button
      class="btn btn-primary float-right mr3"
      @click="addAttendance"
      v-if="getAttendance.length == 0"
    >
      Guardar
    </button>
  </d-container>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";
let storeModuleWorkers = "workers";
let storeModuleAttendance = "attendance";
moment.locale("es");

export default {
  name: "Attendance",
  data() {
    return {
      toggleWorker: false,
      nombre: "",
      rol_id: 0,
      date: new Date(Date.now()).toLocaleString().slice(0, 10)
    };
  },
  methods: {
    obtainWorkers() {
      this.$store.dispatch(`${storeModuleWorkers}/get`, true);
    },
    addAttendance() {
      const data = {
        date: this.date,
        workers: this.getWorkers
      };
      this.$store.dispatch(`${storeModuleAttendance}/post`, data);
    },
    obtainAttendance() {
      let date = moment(this.date).format("YYYY-MM-DD");
      console.log(date);
      this.$store.dispatch(`${storeModuleAttendance}/get`, date);
    }
  },
  computed: {
    ...mapGetters(storeModuleWorkers, ["getWorkers"]),
    ...mapGetters(storeModuleAttendance, ["getAttendance"])
  },
  mounted() {
    this.obtainWorkers();
    this.obtainAttendance();
  }
};
</script>
