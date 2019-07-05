<template>
  <div id="workersListPage">
    <div class="card">
      <div class="card-content">
        <nav class="level">
          <div class="field">
            <p class="level-right has-text-centered">
              <a class="button is-primary is-medium" @click="onEventRegisterBtnClick">Event Register</a>
            </p>
          </div>
          <div class="field">
            <p class="level-right has-text-centered">
              <a class="button is-primary is-medium" @click="onAddBtnClick">Add</a>
            </p>
          </div>
        </nav>
        <!-- table -->
        <vue-good-table
          :columns="columns"
          :rows="rows"
          :selectOptions="{enabled: true}"
          :pagination-options="{enabled: true,mode: 'records'}"
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
                style="margin:10px;"
                title="remove"
                v-on:click="onRowEditClick(props.row)"
              />
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
    <Modal
      fullscreen
      v-model="isWorkersListDialogPopup"
      title="Edit Profile "
      ok-text="Confirm"
      cancel-text="Cancel"
      :styles="{top: '20px'}"
      @on-ok="onConfirmBtnClick"
      @on-cancel="onCancelBtnClick"
    >
      <WorkersProfileDialog />
    </Modal>
    <Modal
      v-model="isEventRegisterDialogPopup"
      title="Event Register "
      ok-text="Confirm"
      cancel-text="Cancel"
      :styles="{top: '20px'}"
      @on-ok="onConfirmBtnClick"
      @on-cancel="onCancelBtnClick"
    >
      <SlottsstallarnaEventRegisterDialog />
    </Modal>
  </div>
</template>

<script>
import WorkersProfileDialog from "./WorkersProfileDialog.vue";
import SlottsstallarnaEventRegisterDialog from "./SlottsstallarnaEventRegisterDialog.vue";
export default {
  name: "workersListPage",
  components: {
    WorkersProfileDialog,
    SlottsstallarnaEventRegisterDialog
  },
  methods: {
    onAddBtnClick() {},
    onEventRegisterBtnClick() {
      this.isEventRegisterDialogPopup = true;
    },
    onRowEditClick() {
      this.isWorkersListDialogPopup = true;
    },
    onCancelBtnClick() {
      this.$Message.info("Clicked cancel");
    },
    onConfirmBtnClick() {
      this.$Message.info("Clicked ok");
    }
  },
  data() {
    return {
      isEventRegisterDialogPopup: false,
      isWorkersListDialogPopup: false,
      columns: [
        {
          label: "ESNcard Number",
          field: "ESNcardNo",
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
          label: "Action",
          field: "action"
        }
      ],
      rows: [
        {
          ESNcardNo: 987426,
          firstName: "Chen",
          lastName: "Ningrui",
          email: "asd@gmail.com",
          phone: "46736156827"
        }
      ]
    };
  }
};
</script>
