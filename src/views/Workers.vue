<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1>
        Trabajadores
        <button
          v-if="!toggleWorker"
          class="btn btn-primary fr"
          @click="toggleAddWorker"
        >
          <font-awesome-icon icon="plus" />
          Agregar nuevo
        </button>
        <button
          v-if="toggleWorker"
          class="btn btn-danger fr"
          @click="toggleAddWorker"
        >
          <font-awesome-icon icon="times" />
          Cancelar
        </button>
      </h1>
    </div>
    <div class="row col-12 tc" v-show="loading">
      <EllipsisLoader color="#58b368" class="m-auto" />
    </div>
    <div class="row mt3" v-if="!loading">
      <div class="col-12 col-sm-6 col-md-4 mb4" v-if="toggleWorker">
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
                        <option :value="null" disabled>
                          Selecciona uno...
                        </option>
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
      <div class="col-12 tc" v-if="getWorkers.length == 0 && !toggleWorker">
        <div class="card pt5 pb5 row col-12">
          <img src="@/assets/empty_state_workers.svg" alt="" />
          <h3 class="pa3">Aún no se ha creado ningun trabajador...</h3>
          <button
            class="btn btn-primary col-4 offset-4"
            @click="toggleAddWorker"
          >
            Crear mi primer trabajador
          </button>
        </div>
      </div>
      <div
        class="col-12 col-sm-6 col-md-4 mb4"
        v-for="(worker, index) in getWorkers"
        :key="worker.id"
      >
        <div class="card h-100">
          <div class="border-bottom card-header">
            <h6 class="mb0 dib">Empleado</h6>
            <div
              class="icon-container delete fr"
              @click="deleteWorker(worker, index)"
            >
              <font-awesome-icon icon="trash"></font-awesome-icon>
            </div>
            <div
              class="icon-container edit fr"
              @click="toggleEditWorker(worker.id)"
            >
              <font-awesome-icon icon="marker"></font-awesome-icon>
            </div>
          </div>
          <div class="list-group list-group-flush">
            <div class="p3 list-group-item">
              <div class="row">
                <div class="col">
                  <div class="form-row">
                    <div class="form-group col-12">
                      <label for="name">Nombre</label>
                      <input
                        v-model="worker.nombre"
                        id="name"
                        type="text"
                        placeholder="Daniel"
                        class="form-control"
                        :disabled="toggleEdit === worker.id ? false : true"
                      />
                    </div>
                    <div class="form-group col-12">
                      <label for="rol">Rol</label>
                      <select
                        id="rol"
                        class="form-control custom-select"
                        v-model="worker.rol_id"
                        :disabled="toggleEdit === worker.id ? false : true"
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
                    <div
                      class="form-group col-12 tr"
                      v-if="toggleEdit === worker.id"
                    >
                      <button
                        @click="editWorker(worker, index)"
                        class="btn btn-success"
                      >
                        Editar
                      </button>
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
      rol_id: null,
      loading: false,
      toggleEdit: null
    };
  },
  methods: {
    toggleAddWorker() {
      this.toggleWorker = !this.toggleWorker;
    },
    toggleEditWorker(id) {
      if (this.toggleEdit == id) {
        this.toggleEdit = null;
      } else {
        this.toggleEdit = id;
      }
    },
    obtainRoles() {
      this.loading = true;
      this.$store.dispatch(`${storeModuleRoles}/get`).then(() => {
        this.loading = false;
      });
    },
    obtainWorkers() {
      this.loading = true;
      this.$store.dispatch(`${storeModuleWorkers}/get`).then(() => {
        this.loading = false;
      });
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
        this.$toasted.show("El trabajador ha sido creado", {
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
    editWorker(worker, index) {
      const data = {
        worker: worker,
        index: index
      };
      this.$store.dispatch(`${storeModuleWorkers}/update`, data).then(() => {
        this.$toasted.show("El trabajador ha sido actualizado", {
          type: "success",
          icon: "thumbs-up",
          action: {
            text: "Okay",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        });
        this.toggleEdit = null;
      });
    },
    deleteWorker(worker, index) {
      const data = {
        worker: worker,
        index: index
      };
      this.$store.dispatch(`${storeModuleWorkers}/delete`, data).then(() => {
        this.$toasted.show("El trabajador ha sido eliminado", {
          type: "success",
          icon: "thumbs-up",
          action: {
            text: "Okay",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        });
        this.toggleEdit = null;
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

<style lang="scss">
.icon-container {
  border-radius: 100%;
  padding: 4px 7px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 0 5px;
  &.edit {
    background-color: #ffb400;
    color: black;
    &:hover {
      background-color: orange;
      color: white;
    }
  }
  &.delete {
    background-color: #c4183c;
    color: white;
    margin-right: 0;
    padding: 4px 8px;
    &:hover {
      background-color: red;
      color: white;
    }
  }
}
</style>
