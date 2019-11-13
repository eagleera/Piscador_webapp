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
    <div class="row col-12 tc" v-show="loading">
      <EllipsisLoader color="#58b368" class="m-auto" />
    </div>
    <div class="row mt4" v-if="!loading">
      <div class="col-12 col-sm-8 offset-sm-2">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Lista de empleados</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0" v-if="getAttendance.length == 0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0" width="100">#</th>
                  <th scope="col" class="border-0">Nombre</th>
                  <th scope="col" class="border-0 tc" width="150">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(worker, index) in getWorkers" :key="worker.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ worker.nombre }}</td>
                  <td>
                    <d-form-checkbox
                      inline
                      v-model="worker.attendance"
                      checked
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
                  <th scope="col" class="border-0" width="150">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(worker, index) in getAttendance" :key="worker.id">
                  <td>{{ index }}</td>
                  <td>{{ worker.worker ? worker.worker.nombre : "" }}</td>
                  <td>
                    <d-form-checkbox inline v-model="worker.status" checked>
                    </d-form-checkbox>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 tr mb4">
      <button
        class="btn btn-primary mr3"
        @click="addAttendance"
        id="createAttendanceBtn"
        v-if="getAttendance.length == 0"
      >
        Guardar
      </button>
    </div>
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
      date: new Date(Date.now()).toLocaleString().slice(0, 10),
      loading: false
    };
  },
  methods: {
    obtainWorkers() {
      this.$store.dispatch(`${storeModuleWorkers}/get`, true);
    },
    addAttendance() {
      const data = {
        date: moment(this.date).format("YYYY-MM-DD"),
        workers: this.getWorkers
      };
      this.$store.dispatch(`${storeModuleAttendance}/post`, data).then(() => {
        this.obtainAttendance();
        this.$toasted.show("¡La asistencia del día ha sido registrada!", {
          type: "success",
          icon: "thumbs-up",
          action: {
            text: "Okay",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        });
      });
    },
    obtainAttendance() {
      let date = moment(this.date).format("YYYY-MM-DD");
      this.loading = true;
      this.$store.dispatch(`${storeModuleAttendance}/get`, date).then(() => {
        this.getWorkers.forEach(worker => {
          worker.attendance = true;
        });
        this.loading = false;
      });
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

<style lang="scss">
.mt--20 {
  margin-top: -20px;
}
</style>
