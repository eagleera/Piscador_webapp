<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1 class="dib">Registro de Actividades</h1>
    </div>
    <div class="row">
      <div class="offset-2 col-8">
        <div class="card">
          <div class="border-bottom card-header">
            <h6 class="mb0">Nuevo registro</h6>
          </div>
          <div class="pa3">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input
                id="name"
                type="text"
                v-model="name"
                placeholder="Nombre"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="description">Descripciónn</label>
              <input
                id="description"
                type="text"
                v-model="description"
                placeholder="Descripcion..."
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="fecha">Fecha de finalización</label>
              <d-datepicker id="fecha" v-model="date" typeable />
            </div>
            <div class="form-group">
              <label for="worker">Encargado</label>
              <d-form-select v-model="worker_id" class="mb-3">
                <option :value="null" selected>Selecciona una opción</option>
                <option
                  :value="worker.worker.id"
                  :key="worker.worker.id"
                  v-for="worker in getWorkers"
                >{{ worker.worker.name }} {{ worker.worker.lastname }}</option>
              </d-form-select>
            </div>
            <div class="form-group">
              <label for="cultivo">Tipo de actividad</label>
              <d-form-select v-model="activity_id" class="mb-3">
                <option :value="null" selected>Selecciona una opción</option>
                <option
                  :value="activity.id"
                  :key="activity.id"
                  v-for="activity in getActivities"
                >{{ activity.name }}</option>
              </d-form-select>
            </div>
            <div class="form-group">
              <label for="cultivo">Cultivo</label>
              <d-form-select v-model="crop_id" class="mb-3">
                <option :value="null" selected>Selecciona una opción</option>
                <option
                  :value="crop.id"
                  :key="crop.id"
                  v-for="crop in getCrops"
                >{{ crop.type.name }} - {{ crop.init_date.split("T")[0] }}</option>
              </d-form-select>
            </div>
            <button class="btn btn-primary" @click="addActivity">Agregar</button>
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
                  <th scope="col" class="border-0">Nombre</th>
                  <th scope="col" class="border-0">Descripcion</th>
                  <th scope="col" class="border-0">Status</th>
                  <th scope="col" class="border-0">Tipo</th>
                  <th scope="col" class="border-0">Encargado</th>
                </tr>
              </thead>
              <tbody v-if="getActivity">
                <tr>
                  <td>{{ 1 }}</td>
                  <td>{{ getActivity.w[0].date }}</td>
                  <td>{{ getActivity.w[0].name }}</td>
                  <td>{{ getActivity.w[0].description }}</td>
                  <td>{{ getActivity.n[0].name }}</td>
                  <td>{{ getActivity.n[1].name }}</td>
                  <td>{{ getActivity.n[2].name }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>

<script>
let storeModuleRanch = "ranch";
let storeModuleWorkers = "workers";
let storeModuleSession = "session";
import { mapGetters } from "vuex";

export default {
  name: "Diario",
  data() {
    return {
      name: null,
      description: null,
      date: null,
      activity_id: null,
      crop_id: null,
      worker_id: null
    };
  },
  methods: {
    obtainCrops() {
      this.$store.dispatch(`${storeModuleRanch}/getCrops`);
    },
    obtainWorkers() {
      this.$store.dispatch(`${storeModuleWorkers}/get`);
    },
    obtainActivities() {
      this.$store.dispatch(`${storeModuleRanch}/getActivities`);
    },
    obtainActivity() {
      this.$store.dispatch(`${storeModuleRanch}/getActivity`);
    },
    addActivity() {
      let data = {
        name: this.name,
        description: this.description,
        date: this.date,
        activity_id: this.activity_id,
        crop_id: this.crop_id,
        worker_id: this.worker_id
      };
      this.$store.dispatch(`${storeModuleRanch}/addActivity`, data).then(() => {
        this.$toasted.show(
        "¡Tu actividad ha sido registrada!",
        {
          type: "success",
          icon: "thumbs-up",
          action: {
            text: "Okay",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        }
      );
      });
    },
    nameCrop(id) {
      let name = this.getCrops.filter(c => {
        return c.id == id;
      })[0];
      name = name.type.name + " - " + name.init_date.split("T")[0];
      return name;
    }
  },
  computed: {
    ...mapGetters(storeModuleRanch, ["getCrops", "getActivities", "getActivity"]),
    ...mapGetters(storeModuleWorkers, ["getWorkers"]),
    ...mapGetters(storeModuleSession, ["getUser"]),
    harvests: function() {
      if (this.getHarvest) {
        return this.getHarvest.filter(h => {
          return h.date;
        });
      }
    }
  },
  mounted() {
    this.obtainCrops();
    this.obtainWorkers();
    this.obtainActivities();
    this.obtainActivity();
  }
};
</script>
