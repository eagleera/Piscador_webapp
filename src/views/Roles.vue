<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1>
        Roles
        <button class="btn btn-primary fr" @click="toggleAddRol">
          Agregar nuevo
          <font-awesome-icon icon="plus" />
        </button>
      </h1>
    </div>
    <div class="row col-12 tc" v-show="loading">
      <EllipsisLoader color="#58b368" class="m-auto" />
    </div>
    <div class="row" v-if="!loading">
      <div class="col-12 col-md-4 mb4" v-if="toggleRol">
        <div class="card h-100">
          <div class="border-bottom card-header">
            <label for="price">Nombre</label>
            <input class="form-control" type="text" v-model="nombre" />
          </div>
          <div class="list-group list-group-flush">
            <div class="p3 list-group-item">
              <div class="row">
                <div class="col">
                  <div class="form-row">
                    <div class="form-group col-12">
                      <label for="price">Paga</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">$</div>
                        </div>
                        <input
                          id="price"
                          type="number"
                          step="0.01"
                          placeholder="$300"
                          class="form-control"
                          v-model="cantidad"
                        />
                      </div>
                    </div>
                    <div class="form-group col-12">
                      <label for="tipo">Tipo</label>
                      <div class="input-group">
                        <select
                          v-model="tipo_id"
                          id="tipo"
                          class="form-control"
                        >
                          <option
                            :value="type.id"
                            v-for="type in getTypes"
                            v-bind:key="type.id"
                          >
                            {{ type.nombre }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <button class="btn btn-success col-12" @click="addRol">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 mb4" v-for="rol in getRoles" v-bind:key="rol.id">
        <div class="card h-100">
          <div class="border-bottom card-header">
            <h6 class="mb0">{{ rol.nombre }}</h6>
          </div>
          <div class="list-group list-group-flush">
            <div class="p3 list-group-item">
              <div class="row">
                <div class="col">
                  <form action>
                    <div class="form-row">
                      <div class="form-group col-12">
                        <label for="price">Paga</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">$</div>
                          </div>
                          <input
                            id="price"
                            type="text"
                            placeholder="$300"
                            class="form-control"
                            v-model="rol.cantidad"
                          />
                        </div>
                      </div>
                      <div class="form-group col-12">
                        <label for="tipo">Tipo</label>
                        <div class="input-group">
                          <select
                            v-model="rol.tipo_id"
                            id="tipo"
                            class="form-control"
                          >
                            <option
                              :value="type.id"
                              v-for="type in getTypes"
                              v-bind:key="type.id"
                            >
                              {{ type.nombre }}
                            </option>
                          </select>
                        </div>
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

<script>
import { mapGetters } from "vuex";
let storeModule = "roles";

export default {
  name: "Roles",
  data() {
    return {
      toggleRol: false,
      nombre: "",
      cantidad: 0,
      tipo_id: null,
      loading: false
    };
  },
  methods: {
    toggleAddRol() {
      this.toggleRol = true;
    },
    obtainRoles() {
      this.loading = true;
      this.$store.dispatch(`${storeModule}/get`).then(()=>{
        this.loading = false;
      });
    },
    obtainTypes() {
      this.$store.dispatch(`${storeModule}/getTypes`);
    },
    addRol() {
      const data = {
        nombre: this.nombre,
        cantidad: this.cantidad,
        tipo_id: this.tipo_id
      };
      this.$store.dispatch(`${storeModule}/post`, data).then(() => {
        this.nombre = "";
        this.cantidad = 0;
        this.tipo_id = null;
        this.toggleRol = false;
      });
    }
  },
  computed: {
    ...mapGetters(storeModule, ["getRoles", "getTypes"])
  },
  mounted() {
    this.obtainRoles();
    this.obtainTypes();
  }
};
</script>
