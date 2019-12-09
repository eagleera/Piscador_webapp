<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1 class="dib">Registro de Cosecha</h1>
    </div>
    <div class="row">
      <div class="offset-2 col-8">
        <div class="card">
          <div class="border-bottom card-header">
            <h6 class="mb0">Nuevo registro</h6>
          </div>
          <div class="pa3">
            <div class="form-group">
              <label for="cantidad">Cantidad</label>
              <input
                id="cantidad"
                type="number"
                v-model="amount"
                placeholder="32"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="fecha">Fecha</label>
              <d-datepicker id="fecha" v-model="date" typeable />
            </div>
            <div class="form-group">
              <label for="cultivo">Cultivo</label>
              <d-form-select v-model="crop" class="mb-3">
                <option :value="null" selected>Selecciona una opción</option>
                <option
                  :value="crop.id"
                  :key="crop.id"
                  v-for="crop in getCrops"
                >{{ crop.type.name }} - {{ crop.init_date.split("T")[0] }}</option>
              </d-form-select>
            </div>
            <button class="btn btn-primary" @click="addHarvest">Agregar</button>
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
                  <th scope="col" class="border-0">Cantidad</th>
                  <th scope="col" class="border-0">Cultivo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(harvest, index) in harvests" :key="harvest.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ harvest.date.split("T")[0] }}</td>
                  <td>{{ harvest.amount }}</td>
                  <td>{{ nameCrop(harvest.crop.id) }}</td>
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
let storeModuleSession = "session";
import { mapGetters } from "vuex";

export default {
  name: "Diario",
  data() {
    return {
      crop: null,
      amount: false,
      date: null
    };
  },
  methods: {
    obtainCrops() {
      this.$store.dispatch(`${storeModuleRanch}/getCrops`);
    },
    obtainHarvest() {
      this.$store.dispatch(`${storeModuleRanch}/getHarvest`);
    },
    addHarvest() {
      let data = {
        crop: this.crop,
        amount: this.amount,
        date: this.date,
        ranch_id: this.getUser.ranch.id
      };
      this.$store.dispatch(`${storeModuleRanch}/addHarvest`, data).then(() => {
        this.$toasted.show(
        "¡Tu cantidad ha sido registrada!",
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
    ...mapGetters(storeModuleRanch, ["getCrops", "getHarvest"]),
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
    this.obtainHarvest();
  }
};
</script>
