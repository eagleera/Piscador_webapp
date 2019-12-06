<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1 class="dib">Mi rancho</h1>
    </div>
    <div class="row col-12 tc" v-show="loading">
      <EllipsisLoader color="#58b368" class="m-auto" />
    </div>
    <div class="row mt4" v-if="!loading">
      <div class="col-12 col-sm-8 offset-sm-2">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Mis cultivos</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0" width="100">#</th>
                  <th scope="col" class="border-0">Tipo</th>
                  <th scope="col" class="border-0 tc" width="150">Fecha Inicio</th>
                  <th scope="col" class="border-0 tc" width="150">Fecha Fin</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <d-form-select v-model="croptype" class="mb-3">
                      <option :value="null" selected>Selecciona una opción</option>
                      <option
                        :value="crop.id"
                        :key="crop.id"
                        v-for="crop in getCropTypes"
                      >{{crop.name}}</option>
                    </d-form-select>
                  </td>
                  <td>
                    <d-datepicker placeholder="Fecha" v-model="init_date" typeable small />
                  </td>
                  <td>
                    <d-datepicker placeholder="Fecha" v-model="end_date" typeable small />
                  </td>
                  <td>
                    <button class="btn btn-primary" @click="addCrop">Agregar</button>
                  </td>
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
import { mapGetters } from "vuex";
import moment from "moment";
let storeModuleSession = "session";
let storeModuleRanch = "ranch";
moment.locale("es");

export default {
  name: "Attendance",
  data() {
    return {
      croptype: null,
      loading: false,
      init_date: null,
      end_date: null
    };
  },
  methods: {
    obtainCropTypes() {
      this.$store.dispatch(`${storeModuleRanch}/cropTypes`);
    },
    obtainCrops() {
      console.log("suh");
      this.$store.dispatch(`${storeModuleRanch}/getCrops`);
    },
    addCrop() {
      const data = {
        crop_type: this.croptype,
        init_date: this.init_date,
        end_date: this.end_date,
        ranch_id: this.getUser.ranch.id
      }
      this.$store.dispatch(`${storeModuleRanch}/postCrop`, data).then(() => {
      })
    }
    // addAttendance() {
    //   const data = {
    //     date: moment(this.date).format("YYYY-MM-DD"),
    //     workers: this.getWorkers
    //   };
    //   this.$store.dispatch(`${storeModuleAttendance}/post`, data).then(() => {
    //     this.obtainAttendance();
    //     this.$toasted.show("¡La asistencia del día ha sido registrada!", {
    //       type: "success",
    //       icon: "thumbs-up",
    //       action: {
    //         text: "Okay",
    //         onClick: (e, toastObject) => {
    //           toastObject.goAway(0);
    //         }
    //       }
    //     });
    //   });
    // }
  },
  computed: {
    ...mapGetters(storeModuleSession, ["getUser"]),
    ...mapGetters(storeModuleRanch, ["getCropTypes"])
  },
  mounted() {
    this.obtainCropTypes();
    this.obtainCrops();
  }
};
</script>

<style lang="scss">
.mt--20 {
  margin-top: -20px;
}
</style>
