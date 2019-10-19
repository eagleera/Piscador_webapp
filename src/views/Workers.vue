<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1>
        Trabajadores
        <button class="btn btn-primary fr" @click="toggleAddWorker">
          Agregar nuevo
          <font-awesome-icon icon="plus" />
        </button>
      </h1>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 mb4" v-if="toggleWorker">
        <div class="card h-100">
          <div class="border-bottom card-header">
            <h6 class="mb0">Nuevo trabajador</h6>
          </div>
          <div class="list-group list-group-flush">
            <div class="p3 list-group-item">
              <div class="row">
                <div class="col">
                  <div class="form-row">
                    <div class="form-group col-12">
                      <label for="name">Nombre</label>
                      <input
                        id="name"
                        type="text"
                        v-model="nombre"
                        placeholder="Daniel"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="rol">Rol</label>
                      <select
                        id="rol"
                        v-model="rol_id"
                        class="form-control custom-select"
                      >
                        <option disabled selected>Elegir...</option>
                        <option
                          v-for="rol in getRoles"
                          v-bind:key="rol.id"
                          :value="rol.id"
                        >
                          {{ rol.nombre }}
                        </option>
                      </select>
                    </div>
                    <button class="btn btn-success col-12" @click="addWorker">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-6 col-md-4 mb4"
        v-for="worker in getWorkers"
        v-bind:key="worker.id"
      >
        <div class="card h-100">
          <div class="border-bottom card-header">
            <h6 class="mb0">Empleado</h6>
          </div>
          <div class="list-group list-group-flush">
            <div class="p3 list-group-item">
              <div class="row">
                <div class="col">
                  <div class="form-row">
                    <div class="form-group col-12">
                      <label for="name">Nombre</label>
                      <input
                        :value="worker.nombre"
                        id="name"
                        type="text"
                        placeholder="Daniel"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="rol">Rol</label>
                      <select
                        id="rol"
                        class="form-control custom-select"
                        v-model="worker.rol_id"
                      >
                        <option disabled selected>Elegir...</option>
                        <option
                          v-for="rol in getRoles"
                          v-bind:key="rol.id"
                          :value="rol.id"
                        >
                          {{ rol.nombre }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </d-container>
</template>

<script>
import { mapGetters } from "vuex";
let storeModuleWorkers = "workers";
let storeModuleRoles = "roles";

export default {
  name: "Workers",
  data() {
    return {
      toggleWorker: false,
      nombre: "",
      rol_id: 0
    };
  },
  methods: {
    toggleAddWorker() {
      this.toggleWorker = true;
    },
    obtainRoles() {
      this.$store.dispatch(`${storeModuleRoles}/get`);
    },
    obtainWorkers() {
      this.$store.dispatch(`${storeModuleWorkers}/get`);
    },
    addWorker() {
      const data = {
        nombre: this.nombre,
        rol_id: this.rol_id
      };
      this.$store.dispatch(`${storeModuleWorkers}/post`, data).then(() => {
        this.toggleWorker = false;
        this.nombre = "";
        this.rol_id = null;
      });
    }
  },
  computed: {
    ...mapGetters(storeModuleRoles, ["getRoles"]),
    ...mapGetters(storeModuleWorkers, ["getWorkers"])
  },
  mounted() {
    this.obtainRoles();
    this.obtainWorkers();
  }
};
</script>
