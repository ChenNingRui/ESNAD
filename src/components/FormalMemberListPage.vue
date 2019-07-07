<template>
  <div id="FormalMemberListPage">
    <div class="card">
      <div class="card-content">
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :pagination-options="{enabled: true,mode: 'pages'}"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'action'">
              <a
                class="fas fa-pen"
                title="edit"
                style="margin:10px;"
                v-on:click="onRowEditClick(props.row)"
                :pagination-options="{enabled: true,mode: 'pages'}"
              />
              <a class="fas fa-trash" title="remove" v-on:click="onRowEditClick(props.row)" />
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
    <Modal
      v-model="isEditDialogPopup"
      title="Edit Profile "
      ok-text="Confirm"
      cancel-text="Cancel"
      :styles="{top: '20px'}"
      @on-ok="onConfirmBtnClick"
      @on-cancel="onCancelBtnClick"
    >
      <FormalMemberProfileEditDialog />
    </Modal>
  </div>
</template>

<script>
import FormalMemberProfileEditDialog from "./FormalMemberProfileEditDialog";

export default {
  name: "FormalMemberListPage",
  components: {
    FormalMemberProfileEditDialog
  },
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
      // this.isEditDialogPopup = true;
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
        // {
        //   label: "Timestamp",
        //   field: "timestamp",
        //   type: "date",
        //   dateInputFormat: "YYYY-MM-DD",
        //   dateOutputFormat: "MM Do YYYY",
        //   filterOptions: {
        //     enabled: true
        //   }
        // },
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
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: [
        {
          ESNcardNo: 987426,
          timestamp: "2011-10-31:9: 35 am",
          firstName: "Chen",
          lastName: "Ningrui",
          birthday: "2011-10-31",
          email: "asd@gmail.com",
          phone: "46736156827",
          nationality: "China",
          term: 6
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
