<template>
  <div id="settingPage">
    <div class="card">
      <div class="card-content">
        <nav class="level">
          <p class="level-right has-text-centered">
            <a class="button is-primary is-medium" @click="onAddUserBtnClick">Add New User</a>
          </p>
        </nav>
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
              <a
                class="fas fa-trash"
                title="remove"
                style="margin:5px;"
                v-on:click="onRowEditClick(props.row)"
              />
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
    <Modal
      v-model="isSettingDialogPopup"
      title="Edit Profile"
      ok-text="Confirm"
      cancel-text="Cancel"
      :styles="{top: '20px'}"
      @on-ok="onConfirmBtnClick"
      @on-cancel="onCancelBtnClick"
    >
      <SettingDialog/>
    </Modal>
  </div>
</template>

<script>
import SettingDialog from "./SettingDialog";
export default {
  name: "settingPage",
  components: {
    SettingDialog
  },
  data() {
    return {
      isSettingDialogPopup: false,
      columns: [
        {
          label: "Name",
          field: "name"
        },
        {
          label: "Email",
          field: "email"
        },
        {
          label: "Job Title",
          field: "jobTitle"
        },
        {
          label: "Status",
          field: "status"
        },
        {
          label: "Priority",
          field: "priority"
        },
        {
          label: "Action",
          field: "action"
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
  methods: {
    onRowEditClick(value) {
      this.isSettingDialogPopup = true;
      return value;
    },
    onConfirmBtnClick() {
      this.$Message.info("Clicked ok");
    },
    onCancelBtnClick() {
      this.$Message.info("Clicked cancel");
    },
    onAddUserBtnClick() {
      this.isSettingDialogPopup = true;
    }
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
