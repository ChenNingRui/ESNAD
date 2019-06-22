<template>
  <div id="FormalMemberListPage">
    <div class="card">
      <div class="card-content">
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :pagination-options="{enabled: true,mode: 'records'}"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'action'">
              <a
                class="fas fa-pen"
                title="edit"
                style="margin:5px;"
                v-on:click="onRowEditClick(props.row)"
              />
              <a class="fas fa-trash" title="remove" v-on:click="onRowEditClick(props.row)"/>
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
    <Modal
      v-model="isEditDialogPopup"
      title="Edit Profile "
      ok-text="comfired"
      cancel-text="cancel"
      :styles="{top: '20px'}"
      @on-ok="onConfirmBtnClick"
      @on-cancel="onCancelBtnClick"
    >
      <MemberProfileEditDialog/>
    </Modal>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import MemberProfileEditDialog from "./MemberProfileEditDialog";

export default {
  name: "FormalMemberListPage",
  components: {
    VueGoodTable,
    MemberProfileEditDialog
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
        },
        {
          label: "Action",
          field: "action"
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
