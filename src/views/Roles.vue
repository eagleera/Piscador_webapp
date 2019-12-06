<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1 id="titleRoles">
        Roles
      </h1>
    </div>
    <div class="row col-12 tc" v-show="loading">
      <EllipsisLoader color="#58b368" class="m-auto" />
    </div>
    <div class="row" v-if="!loading">
      <div
        class="col-12 col-md-4 mb4"
        v-for="(rol, index) in getRoles"
        :key="rol.id"
      >
        <div class="card h-100">
          <div class="border-bottom card-header">
            <h6 class="mb0 dib">{{ rol.name }}</h6>
            <div class="icon-container edit fr" @click="toggleEditRole(rol.id)">
              <font-awesome-icon icon="marker"></font-awesome-icon>
            </div>
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
                          type="text"
                          placeholder="$0.00"
                          class="form-control"
                          v-model="rol.cantidad"
                          :disabled="toggleEdit === rol.id ? false : true"
                        />
                      </div>
                    </div>
                    <div
                      class="form-group col-12 tr"
                      v-if="toggleEdit === rol.id"
                    >
                      <button
                        @click="editRole(rol, index)"
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
let storeModule = "roles";
let storeModuleSession = "session";

export default {
  name: "Roles",
  data() {
    return {
      toggleEdit: null,
      nombre: "",
      cantidad: 0,
      loading: false
    };
  },
  methods: {
    obtainRoles() {
      this.loading = true;
      this.$store.dispatch(`${storeModule}/get`).then(() => {
        this.loading = false;
      });
    },
    toggleEditRole(id) {
      if (this.toggleEdit == id) {
        this.toggleEdit = null;
      } else {
        this.toggleEdit = id;
      }
    },
    editRole(role, index) {
      const data = {
        role: role,
        ranch_id: this.getUser.ranch.id
      };
      console.log(data);
      this.$store.dispatch(`${storeModule}/update`, data).then(() => {
        this.$toasted.show("El rol ha sido actualizado", {
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
    ...mapGetters(storeModule, ["getRoles", "getTypes"]),
    ...mapGetters(storeModuleSession, ["getUser"])
  },
  mounted() {
    this.obtainRoles();
  }
};
</script>
