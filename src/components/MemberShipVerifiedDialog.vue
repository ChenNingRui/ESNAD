<template>
  <div id="memberShipVerifiedDialog">
    <div class="card">
      <div class="card-content">
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :pagination-options="{enabled: true,mode: 'records'}"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'ESNcardNo'">
              <input class="input" type="text" placeholder="Text input">
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  name: "memberShipVerifiedDialog",
  components: {
    VueGoodTable
  },
  data() {
    return {
      isSettingDialogPopup: false,
      columns: [
        {
          label: "TimeStamp",
          field: "timeStamp"
        },
        {
          label: "First Name",
          field: "firstName"
        },
        {
          label: "Last Name",
          field: "lastName"
        },
        {
          label: "ESNcard Number",
          field: "ESNcardNo"
        }
      ],
      rows: [
        {
          name: "Chen",
          email: "asd@gmail.com",
          jobTitle: "WPA",
          status: "Active",
          priority: "1"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
