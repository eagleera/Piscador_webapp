<template>
  <d-container fluid id="firstTime">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="card pa4">
          <div class="row h-100 align-items-stretch">
            <div class="col-5">
              <h2 class="tc">!Bienvenido a pizcador!</h2>
              <h5 class="mt3 mb3">
                La aplicación que te ayuda a llevar el manejo de tu dinero a la
                hora de la cosecha
              </h5>
              <img src="@/assets/welcome.svg" alt />
            </div>
            <div class="col-7 bl">
              <h5 class="tc mt4">
                Para iniciar sesión es necesario crear un rancho, a continuación
                puedes crear el tuyo.
              </h5>
              <div class="row align-items-start mt5">
                <div class="col-4 offset-2 tc">
                  <!-- <button
                    class="btn"
                    :class="{
                      'btn-primary': type == 'invitation',
                      'btn-outline-primary': type != 'invitation'
                    }"
                    @click="chooseType('invitation')"
                  >
                    Tengo un código de invitación
                  </button>-->
                </div>
                <div class="col-12 tc">
                  <button
                    id="ChooseNewRanchBtn"
                    class="btn"
                    :class="{
                      'btn-success': type == 'new',
                      'btn-outline-success': type != 'new'
                    }"
                    @click="chooseType('new')"
                  >Quiero crear mi primer rancho</button>
                </div>
                <div class="col-10 offset-1" v-if="type === 'invitation'">
                  <div class="form-group mt4">
                    <label for="codigo">Código de invitación</label>
                    <d-input-group class="mb-2">
                      <d-input-group-text slot="prepend">
                        <font-awesome-icon icon="terminal" />
                      </d-input-group-text>
                      <d-input
                        placeholder="Código..."
                        type="text"
                        v-model="codigo"
                        id="codigo"
                        required
                      />
                    </d-input-group>
                    <div class="col-12 pa0 tr">
                      <d-button class="btn btn-primary" block-level @click="addInvite">Aceptar</d-button>
                    </div>
                  </div>
                </div>
                <div class="col-10 offset-1" v-if="type === 'new'" id="newRanch">
                  <div class="form-group mt3">
                    <label for="name">Nombre del rancho</label>
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      v-model="form.name"
                      placeholder="Granja Providencia"
                      required
                    />
                  </div>
                  <div class="form-group mt3">
                    <label for="address">Dirección</label>
                    <input
                      id="address"
                      type="text"
                      class="form-control"
                      v-model="form.address"
                      placeholder="Salida a aldama #231"
                    />
                  </div>
                  <div class="form-group mt3">
                    <label for="address">Codigo Postal</label>
                    <input
                      id="zipcode"
                      type="number"
                      class="form-control"
                      v-model="form.zipcode"
                      placeholder="33310"
                    />
                  </div>
                  <div class="form-group mt3 row">
                    <label class="col-12" for="size">Tamaño de tu rancho</label>
                    <div class="col-8">
                      <input
                        id="size"
                        type="number"
                        class="form-control"
                        v-model="form.size"
                        placeholder="9"
                      />
                    </div>
                    <div class="col-4">
                      <label for></label>
                      <d-form-select v-model="form.sizetype" class="mb-3">
                        <option :value="null" selected>Selecciona una opción</option>
                        <option
                          :value="size.id"
                          :key="size.id"
                          v-for="size in getSizes"
                        >{{size.name}}</option>
                      </d-form-select>
                    </div>
                  </div>
                  <div class="col-12 pa0 tr">
                    <d-button
                      class="btn btn-success"
                      id="CreateRanchBtn"
                      block-level
                      @click="createRanch"
                    >Crear</d-button>
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
let storeModule = "ranch";
let storeModuleSession = "session";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "FirstTime",
  data() {
    return {
      sizeSelected: null,
      type: null,
      form: {
        name: null,
        address: null,
        size: null,
        sizetype: null,
        firsttime: true,
        zipcode: null
      },
      codigo: null
    };
  },
  methods: {
    chooseType(tipo) {
      this.type = tipo;
    },
    getSizeTypes() {
      this.$store.dispatch(`${storeModule}/sizeTypes`);
    },
    createRanch() {
      this.$store.dispatch(`${storeModule}/post`, this.form).then(res => {
        if (res.status == 200) {
          router.push("/");
        }
      });
    }
  },
  computed: {
    ...mapGetters(storeModule, ["getSizes"])
  },
  created() {
    this.getSizeTypes();
    this.$store.dispatch(`${storeModuleSession}/me`);
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  height: 100vh;
  > .row {
    height: 100%;
    align-items: center;
  }
}
</style>
