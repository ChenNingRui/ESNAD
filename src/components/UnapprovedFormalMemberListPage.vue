<template>
  <div id="unapprovedMemberListPage">
    <div class="card">
      <div class="card-content">
        <nav class="level">
          <p class="level-right has-text-centered">
            <a class="button is-primary is-medium" @click="onVerifiedBtnClick">Verify</a>
          </p>
        </nav>
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :select-options="{ enabled: true }"
          :pagination-options="{
            enabled: true,
            mode: 'pages'}"
          @on-selected-rows-change="selectionChanged"
        >></vue-good-table>
      </div>
    </div>
    <Modal
      v-model="isVerifiedDialogPopup"
      title="Edit Profile "
      ok-text="Confirm"
      cancel-text="Cancel"
      :styles="{top: '20px'}"
      @on-ok="onConfirmBtnClick"
      @on-cancel="onCancelBtnClick"
    >
      <MemberShipVerifiedDialog :data="this.selectedData" />
    </Modal>
  </div>
</template>

<script>
import MemberShipVerifiedDialog from "./MemberShipVerifiedDialog.vue";
export default {
  name: "unapprovedMemberListPage",
  components: {
    MemberShipVerifiedDialog
  },
  methods: {
    selectionChanged(params) {
      this.selectedData = this.transLateToVerifiedListFormal(
        params.selectedRows
      );
    },
    onVerifiedBtnClick() {
      this.isVerifiedDialogPopup = true;
    },
    onCancelBtnClick() {
      this.$Message.info("Clicked cancel");
    },
    onConfirmBtnClick() {
      this.$Message.info("Clicked ok");
    },
    phoneFormatFn(value) {
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, "-");
    },
    transLateToVerifiedListFormal(params) {
      if (!params || params.length === 0) return;
      let tempList = [];
      for (let i = 0, length = params.length; i < length; i++) {
        let item = new Object();
        item.email = params[i].email;
        item.firstName = params[i].firstName;
        item.lastName = params[i].lastName;
        tempList.push(item);
      }
      return tempList;
    }
  },
  data() {
    return {
      isVerifiedDialogPopup: false,
      selectedData: [],
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
          label: "Dietary Preferences",
          field: "dietaryPreferences"
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
          dietaryPreferences: "sadsadasdas",
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
</style>
