<template>
  <div id="UnapprovedMemberListPage">
    <div class="card">
      <div class="card-content">
        <nav class="level">
          <p class="level-right has-text-centered">
            <a class="button is-primary is-medium">verify</a>
          </p>
        </nav>
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :select-options="{ enabled: true }"
          :pagination-options="{
            enabled: true,
            mode: 'records'}"
        ></vue-good-table>
      </div>
    </div>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
export default {
  name: "UnapprovedMemberListPage",
  components: {
    VueGoodTable
  },
  methods: {
    phoneFormatFn(value) {
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, "-");
    }
  },
  data() {
    return {
      columns: [
        {
          label: "Timestamp",
          field: "timestamp",
          type: "date",
          dateInputFormat: "YYYY-MM-DD",
          dateOutputFormat: "MM Do YYYY",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "First name",
          field: "firstName",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Last Name",
          field: "lastName",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Birthday",
          field: "birthday",
          type: "date",
          dateInputFormat: "YYYY-MM-DD",
          dateOutputFormat: "MM Do YYYY",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Email",
          field: "email",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Phone",
          field: "phone",
          formatFn: this.phoneFormatFn,
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Nationality",
          field: "nationality",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Term",
          field: "term",
          type: "number"
        }
      ],
      rows: [
        {
          timestamp: "2011-10-31:9: 35 am",
          firstName: "Chen",
          lastName: "Ningrui",
          birthday: "2011-10-31",
          email: "asd@gmail.com",
          phone: "46736156827",
          nationality: "China",
          term: 6
        },
        {
          timestamp: "2011-10-31:9: 35 am",
          firstName: "Chen",
          lastName: "Ningrui",
          birthday: "2011-10-31",
          email: "asd@gmail.com",
          phone: "46736156827",
          nationality: "China",
          term: 12
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
@import "../css/user.css";
</style>
