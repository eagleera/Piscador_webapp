<template>
  <d-container fluid class="main-content-container px-4">
    <div class="pa3">
      <h1 class="dib">Día de paga</h1>
      <d-input-group
        size="sm"
        class="date-range justify-content-left w-auto-ns inline-flex ml4"
      >
        <d-datepicker placeholder="Fecha inicio" v-model="init_date" typeable />
        <d-datepicker placeholder="Fecha fin" v-model="end_date" typeable />
        <d-input-group-text slot="append">
          <font-awesome-icon icon="search" />
        </d-input-group-text>
      </d-input-group>
      <button class="btn btn-primary float-right mt4">Imprimir</button>
    </div>
    <div class="row mt4">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Lista de la semana</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center ">
            <table class="table mb-0 table-responsive">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0" width="100">#</th>
                  <th scope="col" class="border-0">Nombre</th>
                  <th scope="col" class="border-0 tl" v-for="date in dates" :key="date.id">
                    {{ date.letra }}
                  </th>
                  <th scope="col" class="border-0 tl">$500</th>
                  <th scope="col" class="border-0 tl">$200</th>
                  <th scope="col" class="border-0 tl">$100</th>
                  <th scope="col" class="border-0 tl">$50</th>
                  <th scope="col" class="border-0 tl">$20</th>
                  <th scope="col" class="border-0 tl">$10</th>
                  <th scope="col" class="border-0 tl">$5</th>
                  <th scope="col" class="border-0 tl">$2</th>
                  <th scope="col" class="border-0 tl">$1</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(attendance, index) in getPayday" :key="attendance.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ attendance.worker.nombre }}</td>
                  <td v-for="date in dates" :key="date.id">
                    <div v-for="payday in attendance.payday" :key="payday.id">
                      <div v-if="payday.date == date.dia">
                        <p>{{ payday.status }}</p>
                      </div>
                    </div>
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
let storeModule = "attendance";
moment.locale("es");

export default {
  name: "Payday",
  data() {
    return {
      init_date: new Date(Date.now()).toLocaleString().slice(0, 10),
      end_date: new Date(Date.now()).toLocaleString().slice(0, 10),
      dates: []
    };
  },
  methods: {
    obtainAttendance(first) {
      if (first) {
        this.init_date = moment(this.init_date).startOf("week").format("l");
      }
      const data = {
        init_date: this.init_date,
        end_date: moment(this.end_date).format("l")
      };
      this.init_date = this.init_date.split(/\//).reverse().join('/');
      this.enumerateDaysBetweenDates(this.init_date, this.end_date);
      this.$store.dispatch(`${storeModule}/getPayday`, data);
    },
    enumerateDaysBetweenDates(startDate, endDate) {
      var dateminus = moment(startDate).startOf('day').subtract(1, 'days');
      var lastDate = moment(endDate).startOf('day');
      while(dateminus.add(1, 'days').diff(lastDate) <= 0) {
        this.dates.push(
          {
            letra: dateminus.clone().format("dddd"),
            dia: dateminus.clone().format("YYYY-MM-DD")
          }
        );
      }
    }
  },
  computed: {
    ...mapGetters(storeModule, ["getAttendance", "getPayday"])
  },
  mounted() {
    this.obtainAttendance(true);
  }
};
</script>
