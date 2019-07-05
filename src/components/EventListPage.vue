<template>
  <div id="EventListPage">
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
                class="fas fa-coins"
                title="budget"
                style="margin:10px;"
                v-on:click="onBudgetCheckClick(props.row)"
              />
              <a
                class="fas fa-users"
                title="participants List"
                style="margin:10px;"
                v-on:click="onParticipantsCheckClick(props.row)"
              />
              <a class="fas fa-trash" title="remove" style="margin:10px;" />
            </span>
          </template>
        </vue-good-table>
      </div>
    </div>
    <Modal
      fullscreen
      v-model="isBudgetDialogPopup"
      title="Budget Detail "
      ok-text="Confirm"
      cancel-text="Cancel"
      :styles="{top: '20px'}"
      @on-cancel="onCancelBtnClick"
    >
      <EventBudgetDetailDialog />
    </Modal>
    <Modal
      fullscreen
      v-model="isParticipantsDialogPopup"
      title="Budget Detail "
      ok-text="Confirm"
      cancel-text="Cancel"
      :styles="{top: '20px'}"
      @on-cancel="onCancelBtnClick"
    >
      <EventParticipantsListDialog />
    </Modal>
  </div>
</template>

<script>
import EventBudgetDetailDialog from "./EventBudgetDetailDialog";
import EventParticipantsListDialog from "./EventParticipantsListDialog";

export default {
  name: "EventListPage",
  components: {
    EventBudgetDetailDialog,
    EventParticipantsListDialog
  },
  methods: {
    onBudgetCheckClick(params) {
      this.isBudgetDialogPopup = true;
      return params;
    },
    onParticipantsCheckClick() {
      this.isParticipantsDialogPopup = true;
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
      isBudgetDialogPopup: false,
      isParticipantsDialogPopup: false,
      columns: [
        {
          label: "Title",
          field: "title",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Start Date",
          field: "startDate",
          type: "date",
          dateInputFormat: "YYYY-MM-DD",
          dateOutputFormat: "MM Do YYYY",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "End Date",
          field: "endDate",
          type: "date",
          dateInputFormat: "YYYY-MM-DD",
          dateOutputFormat: "MM Do YYYY",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Main Responsible",
          field: "mainResponsible",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Sub Responsible",
          field: "subResponsible",
          filterOptions: {
            enabled: true
          }
        },
        {
          label: "Total Cost",
          field: "totalCost"
        },
        {
          label: "Action",
          field: "action"
        }
      ],
      rows: [
        {
          title: "white party",
          startDate: "2011-10-31:9: 35 am",
          endDate: "2011-10-31:9: 35 am",
          mainResponsible: "Chen",
          subResponsible: "Ling Xiao Mike",
          totalCost: "3000kr"
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
