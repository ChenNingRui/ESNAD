<template>
  <div id="memberShipVerifiedDialog">
    <div class="card">
      <div class="card-content">
        <vue-good-table
          :columns="columns"
          :rows="this.data"
          :pagination-options="{enabled: true,mode: 'records'}"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'ESNcardNo'">
              <input class="input" type="text" placeholder="ESNcard No.">
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
          label: "Email",
          field: "email"
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
      ]
    };
  },
  props: {
    data: {
      default: () => {
        return "";
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
