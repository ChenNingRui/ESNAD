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
          :pagination-options="{enabled: true,mode: 'pages'}"
        >
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'action'">
              <a
                class="fas fa-pen"
                title="edit"
                style="margin:10px;"
                v-on:click="onRowEditClick(props.row)"
              />
              <a
                class="fas fa-trash"
                title="remove"
                style="margin:10px;"
                v-on:click="onRowRemoveClick(props.row)"
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
      <SettingDialog :data="this.selectedData" />
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
      selectedData: "",
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
          field: "statusDescription"
        },
        {
          label: "Priority",
          field: "priority",
          type: "number"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: []
    };
  },
  mounted() {
    this.fetchUserList();
  },
  methods: {
    onRowEditClick(value) {
      this.selectedData = value;
      this.isSettingDialogPopup = true;
    },
    onRowRemoveClick(value) {
      this.removeUser(value);
      this.clearAllData();
      this.fetchUserList();
    },
    onConfirmBtnClick() {
      this.$Message.info("Clicked ok");
    },
    onCancelBtnClick() {
      this.$Message.info("Clicked cancel");
    },
    onAddUserBtnClick() {
      this.selectedData = "";
      this.isSettingDialogPopup = true;
    },
    clearAllData() {
      self.rows = [];
    },
    fetchUserList() {
      let self = this;
      this.$axios
        .get("/users")
        .then(response => {
          for (let i = 0, length = response.data.length; i < length; i++) {
            let item = new Object();
            item.name = response.data[i].name;
            item.email = response.data[i].email;
            item.jobTitle = response.data[i].job_title;
            item.priority = response.data[i].priority;
            item.statusDescription = response.data[i].status
              ? "Active"
              : "Suspect";
            item.status = response.data[i].status;
            item.id = response.data[i]._id;
            self.rows.push(item);
          }
        })
        .catch(error => {
          self.$Notice.warning({
            title: "server error",
            desc: error.toString()
          });
        });
    },
    removeUser(item) {
      let self = this;
      this.$axios
        .delete("/user/" + item.id)
        .then(response => {
          self.$Notice.success({
            title: "removed success",
            desc: response.toString()
          });
        })
        .catch(error => {
          self.$Notice.warning({
            title: "server error",
            desc: error.toString()
          });
        });
    }
  }
};
</script>

<style lang="scss">
@import "../../node_modules/bulma/bulma.sass";
@import "../../src/mq.sass";
</style>
