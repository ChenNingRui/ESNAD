<template>
  <div id="EventParticipantsListDialog">
    <div class="card">
      <div class="card-content">
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :pagination-options="{enabled: true,mode: 'records'}"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'action'">
              <a class="fas fa-trash" title="remove" v-on:click="onRowEditClick(props.row)" />
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventParticipantsListDialog",
  components: {},
  methods: {
    phoneFormatFn(value) {
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, "-");
    },
    onRowEditClick(params) {
      this.isEditDialogPopup = true;
      return params;
    },
    onRowRemoveClick(params) {
      return params;
    },
    onConfirmBtnClick() {
      this.$Message.info("Clicked ok");
    },
    onCancelBtnClick() {
      this.$Message.info("Clicked cancel");
    }
  },
  data() {
    return {
      isEditDialogPopup: false,
      columns: [
        {
          label: "ESNcard Number",
          field: "ESNcardNo",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "T-Number",
          field: "tNumber",
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
          label: "Dietary Preferences",
          field: "dietaryPreferences",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: [
        {
          ESNcardNo: 987426,
          tNumber: 987426,
          timestamp: "2011-10-31:9: 35 am",
          firstName: "Chen",
          lastName: "Ningrui",
          birthday: "2011-10-31",
          email: "asd@gmail.com",
          phone: "46736156827",
          nationality: "China",
          dietaryPreferences: "sadsadasdas"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
